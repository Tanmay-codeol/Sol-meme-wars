import { ChevronDown } from "lucide-react"
import { HomeIcon } from "../../assets/icons/HomeIcon"
import { PopularNftIcon } from "../../assets/icons/PopularNftIcon"
import { SearchNftIcon } from "../../assets/icons/SearchNftIcon" 
import { TiltArrow } from "../../assets/icons/TiltArrow"
import { useSelector } from "react-redux" 
import { RootState } from "../../Redux/store"

export const LeftSection = ()=>{

  const {hotNfts, visitedNft } = useSelector((state:RootState)=>state.dummyData)
  console.log("hot nfts.....");
  console.log(hotNfts);
 

  const topICons = [
    {
      name:"Home",
      icon:<HomeIcon className="h-6 w-6 text-white"/>,
    },
    {
      name:"Popular NFT",
      icon:<PopularNftIcon className="h-6 w-6 text-white"/>,
    },
    {
      name:"Search NFT",
      icon:<SearchNftIcon className="h-6 w-6 hover:text-white hover:fill-white"/>,
    },
  ]

  

  return <section className=" max-w-md w-full font-cpmono-heading px-3">

    <div className=" flex  flex-col gap-y-3 mt-4 pb-4 border-b-[1px] border-primary  px-2 ">
      {topICons.map((icon,index)=><Icons key={index} name={icon.name} icon={icon.icon}/>)} 
    </div>

{/* visited NFTs */} 

  <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 text-[14px] ">VISITED NFTs</h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {visitedNft.map((nft,index)=><VisitedNftCard key={index} name={nft.name} img={nft.img} mcap={nft.mcap} priceUp={nft.priceUp} priceDown={nft.priceDown}/>)}
      {/* <VisitedNftCard/> */}
    </div>
  </div>

{/* Hot NFTs */} 

  <div className=" flex flex-col mt-5 border-b-[1px] border-primary pb-4">
    <div className=" flex justify-between font-cpmono-heading px-3">
      <h2  className=" text-subtle2 text-[14px] ">HOT NFTs</h2>
      <ChevronDown className=" text-subtle2"/>
    </div>
    <div  className=" w-full mt-3 flex flex-col gap-3">
      {hotNfts.map((nft,index)=><HotNftCard key={index} name={nft.name} img={nft.img} mcap={nft.mcap} priceUp={nft.priceUp} priceDown={nft.priceDown}/>)} 
    </div>
  </div>

  </section>
}
 

export const Icons = ({name,icon}:{name:string,icon:JSX.Element}) => {
  return (
    <div className=" w-full bg-[] text-subtle hover:bg-[#2d2d2d] cursor-pointer transition-all duration-300 hover:text-white flex px-4 items-center gap-3 py-3 rounded-lg ">
    <div>
{icon}
    </div>
     <div className="">
       <h3>{name}</h3>
     </div>
    <div> 
    </div>
</div>
  )
}
 

type VisitedNftCardProps = { 
  name?: string;
  img?: string;
  mcap?: string;
  priceUp?: string;
  priceDown?: string;
}

const VisitedNftCard = ({name,img,mcap, priceUp, priceDown}:VisitedNftCardProps) => {
  return (
    <div className=" w-full flex gap-2 justify-b items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md  py-1 transition-all duration-300">
      <div>
        <img src={img} alt="" 
        width={35}
        className=" rounded-full" />
      </div>
      <div className=" w-full font-cpmono-heading flex flex-col">
        <div className=" flex  justify-between">
          <div className=" text-subtle">
            <h2 className=" text-[14px] leading-6">{name}</h2>
          </div>
          <div className="">
            <p className=" text-[13px] neon-green-nft ">
            +{priceUp}
            </p>
          </div>
        </div>
        <div className=" flex  justify-between">
          <div className=" text-mintNft">
            <h2 className=" text-[12px] ">
              Mcap: {mcap}M
            </h2>
          </div>
          <div className="">
            <p className=" text-[14px] neon-pink-nft">
            -{priceDown}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const HotNftCard = ({name,img,mcap, priceUp}:VisitedNftCardProps) => {
  return (
    <div className=" w-full flex gap-2 justify-b items-center px-3 hover:bg-zinc-800 cursor-pointer rounded-md  py-1 transition-all duration-300">
      <div>
        <img src={img} alt="" 
        width={35}
        className=" rounded-full" />
      </div>
      <div className=" w-full font-cpmono-heading flex justify-between items-center">
        <div className=" flex flex-col justify">
          <div className=" text-subtle">
            <h2 className=" text-[14px] leading-6">{name}</h2>
          </div>

          <div className=" text-mintNft">
            <h2 className=" text-[12px] ">
              Mcap: {mcap}M
            </h2>
          </div>
        </div> 
        <div>
          <TiltArrow className=" scale-75 " /> 
          <div className=" -mt-2">
            <p className=" text-[14px] neon-green-nft">
            +{priceUp}k
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
