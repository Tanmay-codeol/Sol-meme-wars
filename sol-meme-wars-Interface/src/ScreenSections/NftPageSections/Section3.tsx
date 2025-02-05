import { useEffect, useState } from "react";
import { NftDataProp } from "../../libs/types"
import { useDispatch, useSelector } from "react-redux";
import { useWallet } from "@solana/wallet-adapter-react";
import { Commentprop, fetchComments, postComment } from "../../Redux/main Data/nftDataSlice";
import { AppDispatch, RootState } from "../../Redux/store";
import { Toaster,toast } from "sonner";

 
// example json for nftCardList
// const comments = {
//   name: "alex-jane",
//   img: '',
//   content: "This is a comment",
//   createdAt: "12th Dec 2021",
//   likes: "12",
//   dislikes: "2",
//   replies: "2",
//   userId:"",
// }

// type commentProps = {
//   name: string;        // The name of the user
//   img: string;         // URL or path to the user's image
//   content: string;     // The comment content
//   createdAt: string;   // Formatted date string (e.g., "12th Dec 2021")
//   likes?: string;       // Number of likes (stored as a string)
//   dislikes?: string;    // Number of dislikes (stored as a string)
//   replies?: string;     // Number of replies (stored as a string)
//   userId: string;      // ID of the user (can be empty)
// };
  

export const Section3 = ({id }: NftDataProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const [dontPost, setDontPost] = useState(false);
  const {comments} =  useSelector((state:RootState)=>state.nftData)
  const wallet = useWallet()

  console.log("comments.......",comments);
  
  const [input, setInput] = useState<string>('');

  useEffect(()=>{
    dispatch(fetchComments(id?.toString()))
  },[])

  const handleSubmit = async()=>{
    if(!wallet.publicKey){
      toast.warning("Please connect your wallet before perorming this action.")
      return
    }
    if(!input){
      toast.warning("Please Enter the comment.")
      return
    }
    try {
      setDontPost(true)
      await dispatch(postComment({ 
       postId:id,
       content:input,
       user:wallet.publicKey?.toString(),
     }))
     toast.success("Comment Added!")
     setDontPost(false)
    setInput("")
    await dispatch(fetchComments(id.toString()))
     
      
    } catch (error:any) {
      toast.error(error)
    }
  }

  // const [allNftTab, setAllNftTab] = useState(true)
  return (
    <section className=' containers relative w-full h-full text-white font-cpmono-heading'>
      <Toaster richColors className=" font-cpmono-heading"/>
      <div className="absolute inset-0 h-[1px] -mt-20 bg-gradient-radial from-[#bbbbbb] via-[#232324] to-[#232324]"></div>
      <div className={`mt-20`}>
        <div className=' rounded-full w-full bg-[#000D1A] font-cpmono-heading border-2 border-[#003A73] flex justify-between items-center pr-6'>
          <div className="  w-[70%] ">
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          type="text" name="" id="" placeholder='Add a comment' className=' p-3 px-5 bg-transparent outline-none placeholder:text-[#0073E5] placeholder:opacity-65 ma x-w-xl w-full ' />
          </div>
          <div>
          <button
    onClick={()=> !dontPost? handleSubmit():null}
    className={` ${dontPost?" cursor-not-allowed":""} bg-[#0073E5] font-cpmono-heading text-black capitalize p-1 px-2 rounded-[5px] text-[14px]`} >{"post comment"}</button>
          </div>
        </div>

        <div className=' mt-10'>
          <h2 className=' text-subtle'> {comments.length} Comments</h2>
        </div>
        <div className=' mt-5 space-y-5'>
          { comments.length >0 && comments.map(comment => <CommentCard User={comment.User}  name={comment?.User?.username || "npm"} content={comment.content} createdAt={comment.createdAt} />)}
        </div>
      </div>
    </section>
  )
}
  
export function formatDate(inputDate:string) {

  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Dec"
  const year = date.getFullYear();

  // Add ordinal suffix to the day
  const ordinalSuffix = (day:number) => {
      if (day > 3 && day < 21) return 'th'; // covers 11th to 20th
      switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
      }
  };

  return `${day}${ordinalSuffix(day)} ${month} ${year}`;
}

const CommentCard = ({ content, createdAt, User }:Commentprop) => { 
 const [rnd, setRnd] = useState(1)
 console.log("userss.......",User);
 
 createdAt = formatDate(createdAt)  
 useEffect(()=>{
   setRnd(Math.floor(Math.random() * 4) + 1);
},[])
  return <div className=' border border-primary p-2 rounded-md '>
    <div className=' flex items-start gap-2'>
      <img width={25} src={User?.profileImage?User.profileImage:`/images/avatars/${rnd}.png`} alt="" className=' rounded-full inline-block' />
      <div>
        <div className=' inline-block'>
          <p className=' flex items-center text-[#0066CC] text-[14px] '>{User?.username}
            <span className=' h-1 w-1 bg-[#FF9F00] mx-1 rounded-full '></span>
            <p className=' font-oxanium font-medium '>{createdAt}</p>
          </p>
        </div>
        <p className=' text-subtle3 font-oxanium font-semibold text-[16px] '>
          {content}
        </p>
      </div>
    </div>
    <div>

    </div>
  </div>
}
