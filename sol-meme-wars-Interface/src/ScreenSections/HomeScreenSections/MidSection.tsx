import { NewNftCard } from "../../components/common/NewNftCard"
import { AppDispatch, RootState } from "../../Redux/store"
import { useDispatch, useSelector } from "react-redux" 
import { useEffect, useState } from "react"
import { downVotes, fetchNfts,  upVotes } from "../../Redux/main Data/nftsSlice"
import { useWallet } from "@solana/wallet-adapter-react"   
import { toast, Toaster } from "sonner"

 
  
export const MidSection = ()=>{
  const wallet = useWallet()
  const dispatch = useDispatch<AppDispatch>() 
  const {nfts,loadingFetchNft, nftsUpdated} = useSelector((state:RootState)=>state.nft)  
  const [upVotedNfts, setUpVotesNfts] =  useState<Set<number>>(new Set());
  const [downVotedNfts, setDownVotesNfts] =  useState<Set<number>>(new Set());



  // const { nfts } = useSelector((state:RootState)=>state.dummyData)
  console.log("nftssss ");
  console.log(nfts);
  
     
  
useEffect(() => {
    try {
      const savedUpvotes = localStorage.getItem('upVotedNfts');
      const savedDownVotes = localStorage.getItem('downVotedNfts');
      console.log("savved votes inside useEffect....",savedUpvotes, downVotedNfts);
      
      if (savedUpvotes) {
        // Parse the JSON and ensure we're creating a Set from an array
        const parsedUpvotes = JSON.parse(savedUpvotes);
        setUpVotesNfts(new Set(Array.isArray(parsedUpvotes) ? parsedUpvotes : []));
      }
      if (savedDownVotes) {
        // Parse the JSON and ensure we're creating a Set from an array
        const parseDownpvotes = JSON.parse(savedDownVotes);
        setDownVotesNfts(new Set(Array.isArray(parseDownpvotes) ? parseDownpvotes : []));
      }
    } catch (error) {
      console.error('Error loading upvotes from localStorage:', error);
      // If there's an error, start with an empty Set
      setUpVotesNfts(new Set());
      setDownVotesNfts(new Set());
    }
  }, []);
   
 useEffect(()=>{
   console.log("fetching new nfts.........");
   dispatch(fetchNfts())

 },[dispatch, nftsUpdated])

 const sortedByDateNfts = [...nfts].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

 const handleUpVotes = async  (mint:number)=>{
  if(downVotedNfts.has(mint)){
    console.log("already updated exist.....");
    
    setDownVotesNfts((prevDownvotes)=>{
      console.log("deleteting already existing");
      const newDownVotes = new Set(prevDownvotes);

      if(newDownVotes.has(mint)){
        newDownVotes.delete(mint);
      }
      localStorage.setItem('downVotedNfts', JSON.stringify([...newDownVotes]))
      return newDownVotes;
    })
  }
  setUpVotesNfts((prevUpVotes)=>{
    const newUpVotes =  new Set(prevUpVotes);

    if(newUpVotes.has(mint)){
      newUpVotes.delete(mint);
      toast.success("Upvote removed")
      
    } else{
      newUpVotes.add(mint);
      toast.success("upvoted")
    }
    console.log("newUpVotes......",newUpVotes); 
    
    localStorage.setItem('upVotedNfts', JSON.stringify([...newUpVotes]))
    return newUpVotes;
  })

  // let  toastRef;
  try {
    if(!wallet.publicKey){
      toast.warning("Please connect your wallet before perorming this action.")
      return
    }
    // toastRef = toast.loa
    dispatch(upVotes({
      postId:mint,
      user:wallet.publicKey?.toString()
    }))
  } catch (error:any) {
    toast.error(error)
  } 
 
  }
  const handleDownVotes =  (mint:number)=>{
    // let  toastRef;
    // check if downVoted
    if(upVotedNfts.has(mint)){
      console.log("already updated exist.....");
      
      setUpVotesNfts((prevUpvotes)=>{
        console.log("deleteting already existing");
        const newUpVotes = new Set(prevUpvotes);

        if(newUpVotes.has(mint)){
          newUpVotes.delete(mint);
        }
        localStorage.setItem('upVotedNfts', JSON.stringify([...newUpVotes]))
        return newUpVotes;
      })
    }
    setDownVotesNfts((prevDownvotes)=>{
      const newDownVotes =  new Set(prevDownvotes);
  
      if(newDownVotes.has(mint)){
        newDownVotes.delete(mint);
        toast.success("Downvote removed")
        
      } else{
        newDownVotes.add(mint);
        toast.success("DownVoted")
      }
      console.log("newDownVotes......",newDownVotes); 
      
      localStorage.setItem('downVotedNfts', JSON.stringify([...newDownVotes]))
      return newDownVotes;
    })
    try {
      if(!wallet.publicKey){
        toast.warning("Please connect your wallet before perorming this action.")
        return
      }
      // toastRef = toast.loa
      dispatch(downVotes({
        postId:mint,
        user:wallet.publicKey?.toString()
      }))
      // toast.success("Downvoted")
    } catch (error:any) {
      toast.error(error)
    } 
     
 }

 if(loadingFetchNft){
  return <div className=' h-screen bg-black flex items-center justify-center text-white text-xl font-semibold'>Loading....</div>
}

  return <section className="mx-auto  max-w-[450px] px-4 mt-24">
    <Toaster richColors className=" font-cpmono-heading"/>
    <div className="  mt-20">
<div className=' space-y-24'>

 {/* {[...Array(100).map((index)=>{
  return <div className="text-white text-[50px]" key={index}>
   <p> hello jarvis {index+1}</p>
  </div>
 })]} */}

  {sortedByDateNfts.map((nft,idx:number)=>
  <div className=" border-b pb-10 border-[#303131]"> 
    <NewNftCard
     key={idx}
     downvotedNfts={downVotedNfts}
     upvotedNfts={upVotedNfts}
     handleDownVotes={handleDownVotes}
     handleUpVotes={handleUpVotes}
     {...nft}
      // key={idx} 
      // name={nft.metadata.name} 
      // owner={nft.creator} spread={nft.spread} 
      // img={nft.imageUrl} 
      
      // not important detials
      // buy={nft.buy} 
      // sell={nft.sell} 
      // listed={nft.listed} 
      // listedpercent={nft.listedpercent} 
      // Mcap={nft.mcap} 
      // vol24h={nft.vol24h} 
      />
  </div>
  )}  
</div>
</div>
  </section>
}