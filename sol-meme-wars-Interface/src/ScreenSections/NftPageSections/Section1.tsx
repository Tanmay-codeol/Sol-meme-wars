import { ArrowUp, Triangle } from "lucide-react"
import { Link } from "react-router-dom"
import { NftDataProp } from "../../libs/types";
import { formatDate } from "./Section3";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast, Toaster } from "sonner";
import { useState } from "react";

const nftDetails = {
  buy: "5.60",
  sell: "2.20",
  listners: "2,345",
  mcap: "34",
  supply: "67",
  mints: "50"
}

// type trendingNftProps = typeof nftDetails;

interface NftCardProp extends NftDataProp {
  handleDownVotes:(value:number)=>void,
  handleUpVotes:(value:number)=>void,
  upvotedNfts: Set<number>,
  downvotedNfts: Set<number>,
}


export const Section1 = ({ id, createdAt, User, metadata, imageUrl, creator, upvotes, downvotes, handleUpVotes, handleDownVotes, upvotedNfts, downvotedNfts }: NftCardProp) => {
  const wallet = useWallet()

  const banner = Math.floor(Math.random() * 5) + 1;
  imageUrl = imageUrl ? imageUrl : "https://prod-image-cdn.tensor.trade/images/90x90/freeze=false/https%3A%2F%2Fprod-tensor-creators-s3.s3.us-east-1.amazonaws.com%2Fimage%2Fa2320436-8647-47a4-8f0d-de695c618d06"
  const tempOwner = "Alex Smith"
  const tempCreator = "Oliva jane"
  const currentOwner = tempOwner
  creator = tempCreator
  console.log(creator);
  
  const [newUpvotes, setNewUpvotes] = useState(upvotes)
  const [newDownvotes, setNewDownvotes] = useState(downvotes)

  createdAt = formatDate(createdAt) 

  return (
    <section className=' w-full mt-[56px] text-white font-cpmono-heading'>
      <Toaster/>
      <div className=" w-full flex justify-center items-center">
        {/* <img src={banner} alt="" className=" w-full" /> */}
        <img src={`/images/banners/${banner}.png`} alt="" className=" w-full" />
      </div>

      <div className=" containers w-full">
        <div className=" flex justify-between items-start w-full -mt-[80px]">
          <div className=" flex gap-3     ">
            <div className=" mt-2 bg-black rounded-2xl ">
              <div className=" p-[6px]">
                <img width={144} className=" max-w-full rounded-xl " src={imageUrl} alt="sdf" />
              </div>
              <div className=" flex justify-center items-center mt-2 ">
                <p className=" border-2 border-primary p-[8px] rounded-md font-oxanium font-semibold text-[16px] ">
                  <Triangle
                   onClick={()=>
                    {  if(!wallet.publicKey){
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
                    }
                    }
                  size={16} strokeWidth={5} className={`${upvotedNfts.has(id)?" fill-all-nft-light":""} cursor-pointer hover:text-white transition-all duration-300  neon-upvote inline font-extrabold`}/> {newUpvotes<0?0:newUpvotes}  <span className=" px-1">|</span>   
                  
                  <Triangle
                  onClick={()=>
                    {  if(!wallet.publicKey){
                        toast.warning("Please connect your wallet to use this functionality")
                        return
                      }
                      if(downvotedNfts.has(id)){
                        setNewDownvotes(downvotes-1)
                      } else if(upvotedNfts.has(id)){
                        setNewDownvotes(downvotes+1)
                        setNewUpvotes(upvotes-1)  
                      }
                       else{
                        setNewDownvotes(downvotes+1)
                      }
                      handleDownVotes(id)
                    }
                    }
                  strokeWidth={5} size={16} 
                  className={`${downvotedNfts.has(id)?" fill-priceDown":""} cursor-pointer hover:text-white transition-all duration-300  neon-pink inline font-extrabold`} /> {newDownvotes<0?0:newDownvotes}
                </p>
              </div>
            </div>
            <div className=" mt-14 ">
              <h2 className=" capitalize text-[24px] text-shadow-xl   leading-6 tracking-tighter ">{metadata?.name}</h2>
              <p className=" mt-6 font-oxanium font-semibold text-orange text-[18px]">
                Current Owner : <span className=" text-subtle3 inline">{User?.username ? User.username : currentOwner}</span>
                <Link
                  to={User?.username
                    ? `/profile/${User.walletAddress}-${User.username.split(' ')[0].toLowerCase()
                    }${User.username.split(' ')[1]
                      ? `-${User.username.split(' ')[1].toLowerCase()}`
                      : ''
                    }`

                    : `/profile/${currentOwner.split(' ')[0].toLowerCase()}-${currentOwner.split(' ')[1].toLowerCase()}`}>

                  <img
                    src="/images/redirect.png" className=" inline p-1 -mt-1 ml-1" />
                </Link>
                <p className=" font-oxanium font-semibold text-orange text-[18px]">
                  Created At : <span className=" text-subtle3 inline">{createdAt}  </span>

                </p>
              </p>
            </div>
          </div>
          <div className=" px-6 py-5 pb-0 flex gap-3 flex-col rounded-2xl shadow- xl shadow- shadow-current-nft bg-black ">
            <div className=" flex justify-end items-start gap-16">
              <div className=" ">
                <h3 className=" w-[11  9px] leading-5 neon-green-nft font-oxanium font-semibold text-[20px] ">3.45 <ArrowUp strokeWidth={3.6} className=" inline" />
                  <br />BUY
                </h3>
              </div>
              <div className=" text-right ">
                <h3 className=" w-[119px] leading-5 neon-pink-nft font-oxanium font-semibold text-[20px] "> <ArrowUp strokeWidth={3.6} className=" inline  rotate-180" />3.45
                  <br />SELL
                </h3>
              </div>
            </div>
            <div className=" text-subtle3 w-full flex justify-between">
              <div className=" ">
                <p className="  font-oxanium font-semibold">
                  Listners : <span className=" text-white">{nftDetails.listners}</span>
                </p>
                <p className="      font-oxanium font-semibold">
                  Mcap : <span className=" text-white">{nftDetails.mcap}M</span>
                </p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className=" w-full">
                  <p className="     font-oxanium font-semibold">
                    Supply : <span className=" text-white">{nftDetails.supply}</span>
                  </p>
                  <p className=" text-right   font-oxanium font-semibold">
                    Mints : <span className=" text-white">{nftDetails.mints}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
