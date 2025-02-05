import {  useParams } from 'react-router-dom'
import { Section1 } from '../ScreenSections/UserProfileSections/Section1'
import { Section2 } from '../ScreenSections/UserProfileSections/Section2'
import { Section3 } from '../ScreenSections/UserProfileSections/Section3' 
import {AnimatePresence, motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'
import { useEffect } from 'react'
import { fetchProfile } from '../Redux/main Data/userProfileSlice'
import { dummyUserProfiles } from '../data/dummyData'

export const UserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const {profiles} = useSelector((state:RootState)=>state.dummyData) 
  const profile = useSelector((state:RootState)=>state.userProile.profile) 
  const loading1 = useSelector((state:RootState)=>state.userProile.loading1) 
  console.log("proilessss");
  console.log(profile);
   
  const {userName} = useParams()
  
  console.log("user", userName);
  
  // const allData  = profiles[ userName as keyof typeof profiles]
  
  const buy_AllNfts = dummyUserProfiles["alex-smith"]

  useEffect(()=>{
    console.log("inside useEffect...");
 
    const getProfile = async ()=>{
        await dispatch(fetchProfile(userName?.split('-')[0]))
    }
    getProfile()
  },[])
    
  const addressDetails =  [
    {
      name:"Wallet Address",
      value:profile?.walletAddress || "kljasdaisuhffsaioufhsa8w89h98hs89sd8sh",
    },  
    {
      name:"Total Posts",
      value:profile?.totalPosts || "3",
    },  
    {
      name:"Total Sales",
      value:profile?.totalSales || "2",
    },  
    {
      name:"Last Active",
      value:profile?.lastActive || "24 Dec 2024",
    },   
  ]
  

if(loading1){
  return <div  className=' text-white  h-screen flex justify-center text-[24px] items-center'>
    Fetching User details...

  </div>;
}  
  

if(!profile && userName!=='alex-smith' ){
  return <div  className=' text-white  h-screen flex justify-center text-[24px] items-center'>User doesn't exist at this moment

  </div>;
}  

  return (
    <AnimatePresence>

    <motion.div
    initial={{ x: "100%", opacity: 0.3 }}
    animate={{ x: "0%", opacity: 1 }}
    exit={{ x: "100%", opacity: 0.3 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className=' overflow-x-hidden w-full'>
    
      <Section1 {...profile} trendingNftDetails={profile?.trendingNftDetails} />
      <Section2  
      addressDetails={addressDetails}  /> 
      <Section3  
      allNftDetails={buy_AllNfts.allNFts} buyNftDetails={buy_AllNfts.buyNFts}/>
    </motion.div>
      </AnimatePresence>
  )
} 
 