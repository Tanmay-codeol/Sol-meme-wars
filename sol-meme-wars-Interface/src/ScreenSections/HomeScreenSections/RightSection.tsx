import { ChevronDown } from "lucide-react" 
import { AppDispatch, RootState } from "../../Redux/store"
import { useDispatch, useSelector } from "react-redux"
import { Footer } from "../../components/common/Footer"
import { useEffect } from "react"
import { fetchNfts } from "../../Redux/main Data/nftsSlice"
import { NftDataProp } from "../../libs/types"
import { Link } from "react-router-dom"

export const RightSection = ()=>{
 const dispatch = useDispatch<AppDispatch>()
  const { recentNft } = useSelector((state:RootState)=>state.dummyData)

  const {nfts} =  useSelector((state:RootState)=> state.nft);

  const sortedNfts = [...nfts].sort((a, b) => b.upvotes - a.upvotes);

  console.log("Sorted nfts...");
  console.log(sortedNfts);

  useEffect(()=>{
    dispatch(fetchNfts()).unwrap()
  },[])
  
  
  
  return <section className=" max-w-md w-full  px-3">
       <div className=" font-cpmono-heading text-white text-center">

{/* Trending NFTs */} 

       <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 text-[14px] ">TRENDING NFTs</h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
      {/* <VisitedNftCard/> */}
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {sortedNfts.map((nft,index)=><TrendingNftCard key={index} {...nft} />)}
    </div>
  </div>

{/* Recent Searches NFTs */} 

  <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 uppercase text-[14px] ">Recent Searches </h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {recentNft.map((nft,index)=><RecentSearchCard
       key={index} name={nft.name} owner={nft.owner}  img={nft.img}  mcap={nft.mcap} />)} 
    </div>
  </div>
    </div>
    <Footer/>
  </section>
}

type GlobalProps = { 
  name?: string;
  owner?: string;
  img?: string;
  mcap?: string;
  listed?: string; 
}
  
const TrendingNftCard = ({ id, metadata, title, imageUrl, User, upvotes, comments}:NftDataProp) => {
  return (
    <Link
    to={ metadata.name.split(' ').length>1 ?`/nft/${id}-${metadata.name?.split(' ')[0]?.toLowerCase()}-${metadata.name?.split(' ')[1]?.toLowerCase()}`:`/nft/${id}-${metadata.name.toLowerCase()}`}
    className=" w-full flex gap-2 justify-b items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md py-1 transition-all duration-300">
      <div>
        <img src={imageUrl} alt="" 
        width={35}
        className=" rounded-full" />
      </div>
      <div className=" w-full font-cpmono-heading flex flex-col">
        <div className=" flex justify-between">
          <div className=" text-subtle">
            <h2 className=" text-[14px] leading-6">{title}</h2>
          </div>
          <div className="">
            <p className=" text-[13px] text-mcap
            ">
            Upvotes:{upvotes}
            </p>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className=" text-subtle2">
            <h2 className=" text-[12px] ">
             {User?.username}
            </h2>
          </div>
          <div className="">
            <p className=" text-[13px] text-listed">
            comments:{comments.length}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

const RecentSearchCard = ({name,img,mcap}:GlobalProps) => {
  return (
    <div className=" w-full flex gap-2 items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md  py-1 transition-all duration-300">
    <div>
      <img src={img} alt="" 
      width={35}
      className=" rounded-full" />
    </div>
    <div className=" w-full font-cpmono-heading text-left">
      <div className=" flex flex-col justify">
        <div className=" text-subtle">
          <h2 className=" text-[14px] leading-6">{name}</h2>
        </div>

        <div className=" text-mintNft text-left">
          <h2 className=" text-[12px] ">
            Mcap: {mcap}M
          </h2>
        </div>
      </div>  

    </div>
  </div>
  )
}
