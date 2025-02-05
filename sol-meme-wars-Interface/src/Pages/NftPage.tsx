 import {  useParams } from 'react-router-dom'
// import { dummyNftData } from '../data/dummyData'
import { Section1 } from '../ScreenSections/NftPageSections/Section1'
import { motion } from 'framer-motion'
import { Section2 } from '../ScreenSections/NftPageSections/Section2'
import { Section3 } from '../ScreenSections/NftPageSections/Section3'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'
import { useEffect, useState } from 'react'
import { fetchNftsById } from '../Redux/main Data/nftDataSlice'
import { toast } from 'sonner'
import { useWallet } from '@solana/wallet-adapter-react'
import { downVotes, upVotes } from '../Redux/main Data/nftsSlice'


export const NftPage = () => {
  const {nftName} = useParams() 
    const wallet = useWallet()
  // const nftDataDummy  = useSelector((state:RootState)=>state.dummyData.nftData)
  const { nftData,loading } = useSelector((state:RootState)=>state.nftData)
  const dispatch = useDispatch<AppDispatch>();
  const [upVotedNfts, setUpVotesNfts] =  useState<Set<number>>(new Set());
  const [downVotedNfts, setDownVotesNfts] =  useState<Set<number>>(new Set());


//  console.log(upVotedNfts);

     
  
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
  console.log("gettinng nft.......");
  
   const getNftData = async ()=>{
    await dispatch(fetchNftsById(nftName?.split('-')[0]))
   }
   getNftData();
},[dispatch])


 
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

  
  // const allData = nftDataDummy[nftName as keyof typeof nftData] 
  
if(loading){
  return <div  className=' text-white h-screen font-cpmono-heading text-2xl font-bold flex justify-center text-[24px] items-center'>
    Fetching details...
  </div>;
}
  
if(!nftData || Object.keys(nftData).length  ===0){
  return <div  className=' text-white h-screen flex justify-center text-[24px] items-center font-cpmono-heading'>Nft doesn't exist at this moment 
  </div>;
}

const addressDetails =  [
  {
    name:"Mint Address",
    value:nftData.nftMint,
  },
  {
    name:"Token Account",
    value:nftData.tokenAccount,
  },
  {
    name:"Creator Address",
    value:nftData.creator,
  },
  {
    name:"For Sale",
    value:nftData.isForSale?"Yes":"No",
  },
  {
    name:"Status",
    value:nftData.status,
  },
]

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0.3 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className=' overflow-x-hidden w-dfull'>


      <Section1 
          downvotedNfts={downVotedNfts}
          upvotedNfts={upVotedNfts}
          handleDownVotes={handleDownVotes}
          handleUpVotes={handleUpVotes}
      {...nftData} />
      <Section2 addressDetails={addressDetails} />
      <Section3 {...nftData} />
    </motion.div>
  )
}
