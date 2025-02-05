import { Crown, Star } from "lucide-react"

interface NftProps {
  name:string,
  spread:number,
  img:string,
  buy:number,
  sell:number,
  listed:number,
  listedpercent:number,
  Mcap:string,
  vol24h:string 
}

export const NftCard = ({name,spread,img,buy,sell,listed,listedpercent,Mcap,vol24h}:NftProps) =>{
 
  return  <div>
  <div className="group w-full cursor-pointer bg-[#1e1f20] hover:border-[#8EE3FB] hover:border-2 border-2 border-[#1e1f20] relative font-cpmono-normal   hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] hover:bg-slate-900">
  {/* <div className="absolute  hover:border-cyan-400   rounded-lg shadow-[inset_0_0_10px_rgba(6,182,212,0.5)] pointer-events-none"></div> */}
  
  {/* Top right star */}
  {/* <div className="absolute top-2 right-2">
    <Star className="w-4 h-4 text-pink-500" />
  </div> */}
  
  {/* Avatar */}
  <div className="  -mt-8 ">
  <div className="w-16 h-16 mx-auto rounded-md ">
    <img src={`https://prod-image-cdn.tensor.trade/images/90x90/freeze=true/${img}`} alt="Frogana avatar" className="w-full h-full object-cover group-hover:border-[#8EE3FB] group-hover:border-2 border-2 group-hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.5)]  border-[#1e1f20] transition-transform duration-300" />
  </div>
  
  {/* Name and crown */}
  <div className="text-center mt-2 flex items-center justify-center">
    <Star className="w-4 h-4 text-gray-500 mr-1" />
    <span className="text-white text-lg font-bold">{name}</span>
    <Crown className="w-4 h-4 text-yellow-500 ml-1" />
  </div>
  
  {/* Spread */}
  <div className="text-center text-[#8EE3FB] text-xs mt-1 font-semibold ">Spread: {spread}%</div>
  
  {/* Buy/Sell */}
  <StatsCard leftVal={buy} leftHead="Buy now" rightVal={sell} rightHead="sell now" />

   {/* Listed stats */}
  <StatsCard leftVal={listed} leftHead="listed #" rightVal={listedpercent} rightHead="listed %" />
    {/* Bottom stats */}
  <StatsCard leftVal={Mcap} leftHead="Market Cap" rightVal={vol24h} rightHead="24h volume" />
 
  </div>
</div>
  </div>
}

interface StatsCardProp {
  leftVal:number | string,
  rightVal:number | string,
  leftHead:string,
  rightHead:string
}
const StatsCard = ({leftVal, rightVal,leftHead,rightHead}:StatsCardProp)=>{
  return  <div className="flex justify-between px-2 mt-2 text-sm">
  <div>
    <div className={` ${leftHead.includes('Buy')?" neon-green-nft":""} font-bold text-white`}>{leftVal}</div>
    <div className="text-xs text-gray-500 uppercase font-semibold">{leftHead}</div>
  </div>
  <div className="text-right">
    <div className={` ${rightHead.includes('sell')?" neon-pink-nft":""} font-bold text-white`}>{rightVal} <p className={`inline ${rightHead.includes('listed')?' -ml-2':'hidden'}`}>%</p> </div>
    <div className="text-xs text-gray-500 uppercase font-semibold">{rightHead}</div>
  </div>
</div>
}