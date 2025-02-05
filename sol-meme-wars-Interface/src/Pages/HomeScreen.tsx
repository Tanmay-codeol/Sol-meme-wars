  
import { useDispatch } from 'react-redux'
import { AppDispatch, } from '../Redux/store'
import { LeftSection } from '../ScreenSections/HomeScreenSections/LeftSection'
import { MidSection } from '../ScreenSections/HomeScreenSections/MidSection'
import { RightSection } from '../ScreenSections/HomeScreenSections/RightSection' 
import { useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { fetchCurrentProfile } from '../Redux/main Data/userProfileSlice'

export const Home = ()=>{ 
   const {publicKey} = useWallet()
   const dispatch = useDispatch<AppDispatch>()
  console.log("inside wallet");
  
         useEffect(()=>{
           const getProfile = async()=>{ 
            await dispatch(fetchCurrentProfile(publicKey?.toString()))
           }
           getProfile() 
       },[publicKey])

  // const navigate = useNavigate()  

  // useEffect(()=>{
  //   const token =  get('NFTtoken')
  //   if(!token){
  //     navigate('/signup')
  //   }   
  // },[]) 
  return  <div className="flex h-screen overflow-hidden w-full">
    <div className="w-[17%] pt-16 h-  overflow-y-auto no-scrollbar bg-secondary border-r  border-[#303131]">
        <LeftSection />
      </div>
  <div className="w-[63%] h-sc reen overflow-y-auto no-scrollbar mt-[73px]">
    <MidSection />
  </div>

  <div className="w-[20%] h-sc reen overflow-y-auto no-scrollbar pt-20 bg-secondary border-l border-[#303131]">
    <RightSection />
  </div>
</div>

}