import { MessageSquare, Triangle } from "lucide-react"
// import {ShareSvg} from '../../../public/svgs/ShareSvg'
import { OwnerNameSvg } from "../../assets/icons/OwnerNameSvg";
import { Link } from "react-router-dom";
import { NftDataProp } from "../../libs/types";
// import { useSelector } from "react-redux";
// import { RootState } from "../../Redux/store";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

interface NfttCardPropMain extends NftDataProp {
  handleDownVotes:(value:number)=>void,
  handleUpVotes:(value:number)=>void,
  upvotedNfts: Set<number>,
  downvotedNfts: Set<number>,
}

export const NewNftCard = ({ id,metadata, User, upvotes, downvotes, imageUrl, creator,handleDownVotes, handleUpVotes,upvotedNfts, downvotedNfts, comments }: NfttCardPropMain) => {
  // const {nfts} = useSelector((state:RootState)=>state.nft)

  // const colour = localStorage.getItem("nftColour")     

  const [newUpvotes, setNewUpvotes] = useState(upvotes) 
  const [newDownvotes, setNewDownvotes] = useState(downvotes)

  const wallet = useWallet()
  console.log(newDownvotes);
  
  // console.log(vol24h, buy, sell, spread,listed,listedpercent,Mcap);
  // console.log("name...",name.split(' ').length);

  
  
  return <div>
    <div className="  nft-card w-full bg-[#101111] bordder border-[#101111] rounded-xl pr-[1.5px] ">
      <Link
      to={ metadata.name.split(' ').length>1 ?`/nft/${id}-${metadata.name?.split(' ')[0]?.toLowerCase()}-${metadata.name?.split(' ')[1]?.toLowerCase()}`:`/nft/${id}-${metadata.name.toLowerCase()}`}>
      <div className=" -mt-16 flex">
        <div className=" nft-card-img rounded-xl  p-[1.7px]"> 
          <div className=" w-32 h-32 mx-aduto rounded-t-xl p-3 bg-[#101111] border-4 border-[#101111]   ">
            <img src={User?.profileImage?User?.profileImage:imageUrl} alt="Frogana avatar" className="w-full h-full object-cover rounded-lg duration-300 rounded-   cursor-pointer " />
          </div>
        </div>
        <div className=" w-full ">
          <div className=" nft-card-img-left h-1/3 mt-[21.5px] -ml-[1.6px] w-11/12 pl-[1.4px] pb-[1.4px] rounded-bl-xl  bg-white ">
            <div className=" relative -z[999] w-full bg-black h-full rounded-bl-xl ">  </div>
          </div>
          <div className=" flex mt-2 justify-between items-center">
            <div>
              <h3 className=" font-cpmono-heading text-[#ffa600] capitalize cursor-pointer"> {metadata.name}</h3>
              <div className=" flex items-center gap-1">
              <OwnerNameSvg className=""/>
              {/* <Link to={"/profile/alex-jane"}> */}
              <p className=" font-cpmono-heading text-xs text-gray-500 cursor-pointer capitalize truncate w-32 ">{User?.username?User.username:creator}</p>
              {/* </Link> */}
              </div>
            </div>
            <div className="font-cpmono-heading capitalize flex gap-3 pr-4 font-thin">
              <h3 className=" neon-minted text-[#5d9eff] bg-black p-1 rounded-md px-2 text-sm"> Mints:2K </h3>
              {/* <h3 className=" neon-listed text-[#ff69b4] bg-black p-1 rounded-md px-2 text-sm"> Listed:{listedpercent}% </h3>
              <h3 className=" neon-mcap text-[#a855f7] bg-black p-1 rounded-md px-2 text-sm "> Mcap:{Mcap} </h3> */}

            </div>
          </div>
        </div>
      </div>
      </Link>

      {/* card contet */}
      {/* here removing this -mt gives a little better design */}
      <div className=" bg-[#101111] -mt-[82px] rounded-xl ">
        <div className=" mt-4">
          <div className=" pt-10 pb-5">
            {/* content */}
            <div className=" mt-5 px-4">
              <div>
              <img src={imageUrl}  alt="" className=" aspect-square rounded-xl" />
              </div>

            <div className=" mt-5 flex justify-between font-cpmono-normal text-white">
              <div className=" flex gap-3">
                {/* <p className=" bg-zinc-800 px-3 py-[6px] rounded-full ">
                  <ShareSvg  className=" w-[19px] inline" /> {124}
                </p> */}
                <p className=" bg-zinc-800 px-3 py-[6px] rounded-full ">
                  <MessageSquare size={20} className=" inline" /> { comments.length>0? comments.length: 0}
                </p>
              </div>
              <div className=" flex gap-3">
                <p className=" bg-zinc-800 px-3 space-x-1 py-[6px] rounded-full ">
                  <Triangle
                  onClick={()=>{
                    if(!wallet.publicKey){
                      toast.warning("Please connect your wallet to use this functionality")
                      return
                    }
                    if(upvotedNfts.has(id)){
                      setNewUpvotes(upvotes)
                    } else if(downvotedNfts.has(id)){
                      setNewUpvotes(upvotes+1)
                      setNewDownvotes(downvotes-1)
                    } 
                    else{
                      setNewUpvotes(upvotes+1)
                    }
                    handleUpVotes(id)
                  }}
                  size={16} 
                  strokeWidth={5} 
                  className={` ${upvotedNfts.has(id)?" fill-all-nft-light":""} cursor-pointer hover:text-white transition-all duration-300  neon-upvote inline font-extrabold`} />
                   <span className=" -ml-2">{newUpvotes<0?0:newUpvotes} </span> 
                  <Triangle
                  onClick={()=>
                  {  if(!wallet.publicKey){
                      toast.warning("Please connect your wallet to use this functionality")
                      return
                    }
                    if(downvotedNfts.has(id)){
                      setNewDownvotes(downvotes-1)
                    } else if(upvotedNfts.has(id)){
                      setNewDownvotes(downvotes)
                      setNewUpvotes(upvotes)  
                    }
                     else{
                      setNewDownvotes(downvotes+1)
                    }
                    handleDownVotes(id)
                  }
                  }
                  strokeWidth={5} size={16} className={` ${downvotedNfts.has(id)?" fill-priceDown":""} cursor-pointer hover:text-white transition-all duration-300  neon-pink inline font-extrabold`} />
                </p> 
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  {/* <div className=" -mtg-16 p-[1.d4px] bg-[#1e1f20] rounded-xl -ml-1 "> */ }
}

// interface StatsCardProp {
//   leftVal: number | string,
//   rightVal: number | string,
//   leftHead: string,
//   rightHead: string
// }
// const StatsCard = ({ leftVal, rightVal, leftHead, rightHead }: StatsCardProp) => {
//   return <div className="flex justify-between px-2 mt-2 text-sm">
//     <div>
//       <div className={` ${leftHead.includes('Buy') ? " neon-green-nft" : ""} font-bold text-white`}>{leftVal}</div>
//       <div className="text-xs text-gray-500 uppercase font-semibold">{leftHead}</div>
//     </div>
//     <div className="text-right">
//       <div className={` ${rightHead.includes('sell') ? " neon-pink-nft" : ""} font-bold text-white`}>{rightVal} <p className={`inline ${rightHead.includes('listed') ? ' -ml-2' : 'hidden'}`}>%</p> </div>
//       <div className="text-xs text-gray-500 uppercase font-semibold">{rightHead}</div>
//     </div>
//   </div>
// }