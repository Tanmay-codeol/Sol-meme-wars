import React, {  useEffect } from 'react';
import {   X } from 'lucide-react'; 
import {  toast, Toaster } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import { postNfts, userNfts } from '../../Redux/main Data/nftsSlice';
import { popupState } from '../../libs/atoms';
import { useSetRecoilState } from 'recoil';
import { useWallet } from '@solana/wallet-adapter-react';
import { dummyNftToPostType } from '../../libs/types';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { dummyNftToPost } from '../../data/dummyData';
// import { useNavigate } from 'react-router-dom';
   

interface FormDataType {
  nftMint: string ;
  walletAddress:string | undefined
}

export const PostNft: React.FC = () => {
const dispatch = useDispatch<AppDispatch>()  
// const navigate = useNavigate()
const wallet = useWallet();
    const setPostNft = useSetRecoilState(popupState);

   const {nftsToPost, loadingUserNft, error} = useSelector((state:RootState)=>state.nft)

   console.log("nfts to post....",nftsToPost);
   

const handlePostNft = async (mint:string)=>{
  console.log("inside handlePost,,,.");
  console.log("mint....",mint);
  
  try {
    if(mint){
      const  toastRef = toast.loading("Posting Nft")

     await dispatch(postNfts({
        nftMint:mint,
        walletAddress:wallet.publicKey?.toString()
      }))

      
      console.log("error in another page, ", error);
      if(error){
          // throw new Error(error)
          toast.dismiss(toastRef)
          toast.error(error)
      } else{
        setTimeout(() => {
          toast.dismiss(toastRef)
         toast.success("Nft Posted Successfully!")
         setTimeout(() => {
           setPostNft(false)
         }, 1000);
       }, 1000);
      }
    }
  } catch (error:any) {
    toast.error(error)
  }
}

  useEffect(()=>{ 
    const fetchUserNfts = async ()=>{
      await dispatch(userNfts(
        {
          address:wallet.publicKey?.toString(),
          notPosted:true,
        }
      )).unwrap()
    }
  fetchUserNfts();
  },[])

  if( loadingUserNft){
    return  <div className='relative p-[2px] rounded-md bg-gradient-to-b from-green-400 via-blue-500 to-gray-800 '>
    <div className="  h-[250px] relative bg-primary p-8 rounded-md">
      <Toaster  richColors className=' font-cpmono-heading'/>
      <X onClick={()=>setPostNft(false)} className=' cursor-pointer absolute right-3 top-3'  />
      <div className=" relative max-w-xl mx-auto">
        <h1 className=" text-3xl font-bold text-white mb-8 font-cpmono-heading">Post your NFT</h1>
        <div className='font-cpmono-heading absolute left-1/3 right-0 top-40   '>
            Fetching your NFTs..          
        </div>
      </div>
    </div>
    </div>
  }

   
  return (
    <div className='relative p-[2px] rounded-md bg-gradient-to-b from-green-400 via-blue-500 to-gray-800 '>
    <div className=" max-h-[350px] no-scrollbar relative bg-primary p-8 rounded-md">
      <Toaster   richColors className=' fixed font-cpmono-heading'/>
      <X onClick={()=>setPostNft(false)} className=' cursor-pointer absolute right-3 top-3'  />
      <div className="max-w-xl mx-auto">
        <h1 className=" text-3xl font-bold text-white mb-8 font-cpmono-heading">Post your NFT</h1>
       {!wallet.publicKey &&
       <div className=' relative'>  
       <div  className=' absolute z-[999] left-0 top-1/3 right-0'>
        <h1 className=' font-cpmono-heading text-center'>Please Connect your wallet first</h1>
       <div className=" flex  justify-center mt-3">
         <WalletMultiButton
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "'CP Mono Heading', monospace",
            lineHeight: "17px",
            padding: "1px 12px",
            borderRadius: "0.375rem",
            backgroundColor: "#8EFBC1",
            textTransform: "uppercase",
          }}
          className="font-bold font-cpmono-heading truncate"
        > 
          Connect Wallet
        </WalletMultiButton>
      </div>
        </div>
       <div className={` pointer-events-none blur space-y-3 `}>
       {dummyNftToPost.map((nft,idx)=>  <NftsCard handlePost={handlePostNft} key={idx}  {...nft} />)}
       </div>
       </div>
        }
       { wallet.publicKey && <div className={` space-y-3 `}>
       {nftsToPost.map((nft,idx)=>  <NftsCard handlePost={handlePostNft} key={idx}  {...nft} />)}
       </div>} 
       { nftsToPost.length === 0 &&   <div className='h-[300px] relative'>  
       <div  className=' absolute z-[999] left-0 top-1/4 right-0'>
        <h1 className=' font-cpmono-heading text-center text-[21px]'>You don't have any <br /> NFTs to post</h1>
        {/* </> */}
        </div>
       {/* <div className={` pointer-events-none blur space-y-3 `}>
       {dummyNftToPost.map((nft,idx)=>  <NftsCard handlePost={handlePostNft} key={idx}  {...nft} />)}
       </div> */}
       </div>

       }
      </div>
    </div>
    </div>
  );
};

export  type {FormDataType}

interface NftsCardProps extends dummyNftToPostType {
  handlePost:(value:string)=>Promise<void>
}
 
const NftsCard = ({name,uri,symbol, mintAddress, handlePost}:NftsCardProps) => {
  console.log("uri....",uri);
  
  return (
    <div className='bg-zinc-900  flex justify-between items-center'>
    <div className=" w-full flex gap-2 items-center  px-3 hover:bg-zinc-800  rounded-md  py-1 transition-all duration-300">
    <div>
      <img src={uri} alt="" 
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
            Symbol: {symbol}
          </h2>
        </div>
      </div>  

    </div>
  </div>
  <div>
    <button
    onClick={()=>handlePost(mintAddress)}
    className='  bg-[#8EFBC1] font-cpmono-heading text-black capitalize p-1 rounded-sm text-[14px]' >{"post"}</button>
  </div>
    </div>
  )
} 