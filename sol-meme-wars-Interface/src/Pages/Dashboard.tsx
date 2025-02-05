import React, { ChangeEvent, useEffect, useState } from 'react';
import { ArrowRight, Camera, Plus, X } from 'lucide-react';  
// import {    useNavigate } from 'react-router-dom';
import {toast, Toaster} from 'sonner'
import {   useSetRecoilState, } from 'recoil';
import { authPopUpState, editProfileState,   verifiedState } from '../libs/atoms';
import { useWallet } from '@solana/wallet-adapter-react'; 
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import { fetchCurrentProfile, updateProfile } from '../Redux/main Data/userProfileSlice';

// import FormData from "form-data"
interface ProfileImageType {
  file: File | null;
  previewUrl: string | undefined | null;
}

export const EditProfile = ({signup,login}:{signup?:boolean, login?:boolean}) => {
  console.log(login);

   const{myProfile,loading2} = useSelector((state:RootState)=>state.userProile)
   console.log("proile and loading,,,",myProfile,loading2);
   
   const [profileImg, setProfileImg] = useState<ProfileImageType>({
     file: null,
     previewUrl: myProfile?.profileImage
    });
    const [userName, setUserName] = useState<string | null | undefined  | any >(myProfile?.username); 
    // const [password, setPassword] = useState(''); 
    const { publicKey } = useWallet();
    const  setEditProfile = useSetRecoilState(editProfileState) 
    const  setVerified = useSetRecoilState(verifiedState)
    
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
     setProfileImg({ file:null, previewUrl:myProfile?.profileImage})
     setUserName(myProfile?.username)
    },[myProfile])

    useEffect(()=>{
      const getProfile = async()=>{

       await dispatch(fetchCurrentProfile(publicKey?.toString()))
      }
      getProfile() 
  },[EditProfile,authPopUpState,publicKey])

  console.log("myProfile image...",profileImg.previewUrl);
  
 
    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      e.preventDefault();
      const file = e.target.files?.[0];
      console.log("setting file,.....",file);
      if (file) {
        
        // Store both the file and create a preview URL
        setProfileImg({
          file:file,
          previewUrl: URL.createObjectURL(file)
        });  
      }
    };
  
    const removeImage = (): void => {
      // Clean up the preview URL to prevent memory leaks
      if (profileImg.previewUrl) {
        URL.revokeObjectURL(profileImg.previewUrl);
      }
      setProfileImg({
        file: null,
        previewUrl: null
      });
    };
   

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(userName===''|| !profileImg.previewUrl){
      toast.warning("Please enter all feilds")
      return;
    }
     

    const toastRef =  toast.loading("updating...")
    // api call here....
    await dispatch(updateProfile({
      file:profileImg.file,
      username:userName
    })).unwrap()
    setTimeout(() => {
      // navigate('/')
      setVerified(true)
      setEditProfile(false)
      toast.dismiss(toastRef)
      toast.success('verified!')
    }, 2000);
    // toast.success("User Created!")  
  };

  if(loading2){
    return <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md relative bg-secondary rounded-lg border border-gray-700 pb-3 p-8">
      <div className=' absolute top-3 right-3'>
            <X  onClick={()=>setEditProfile(false)} />
      </div>
        <h2 className="text-2xl font-bold text-white mb-6 font-mono">{signup?"Sign Up":"Edit your Profile"}</h2>

        <div className=' h-[350px]'>
        <h2 className='font-cpmono-heading absolute left-1/4 right-0 top-1/2   '>
            Fetching your Profile..          
        </h2>
        </div>
  </div>
  </div>
  } 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Toaster  richColors className=' font-cpmono-heading ' />
      {/* Logo Section */}

      {/* <div className="mb-8 flex items-center space-x-2">
        <img src="/vite.svg" alt="" />
        <span className="text-green-400 text-2xl font-mono font-bold">SOLMEMEWARS</span>
      </div> */}

      {/* Login Form */}
      <div className="w-full max-w-md relative bg-secondary rounded-lg border border-gray-700 pb-3 p-8">
      <div className=' absolute top-3 right-3'>
            <X  onClick={()=>setEditProfile(false)} />
      </div>
        <h2 className="text-2xl font-bold text-white mb-6 font-mono">{signup?"Sign Up":"Edit your Profile"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Profile Photo
            </label>
          <div className=' flex flex-col  items-center'>
        <div className={`border-2 border-dashed border-gray-600 rounded-lg max-w-[200px] p-4 
                ${profileImg.previewUrl ? 'bg-gray-700' : 'bg-gray-800'} 
                hover:border-green-400 transition-colors duration-200`}>
                { profileImg.previewUrl ? (
                  <div className="relative">
                    <img 
                      src={  profileImg.previewUrl} 
                      alt="NFT Preview" 
                      className="w-full h-full object-contain rounded"
                    />
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-gray-800 p-1 rounded-full"
                    >
                      <Plus className="h-5 w-5 text-white transform rotate-45" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center text-[12px] text-clip text-center justify-center cursor-pointer">
                    <Camera className="h-12 w-12 text-gray-400 mb-4" />
                    <span className="text-gray-400 font-mono">Click to upload or drag and drop</span>
                    <span className="text-sm text-gray-500  text-left text-[11px] font-mono mt-2">PNG, JPG, GIF up to 10MB</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>
          </div>
       { signup &&   <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="pepe_swag0033"
            />
          </div>}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="pepe007"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Password
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="must be more than 5 character"
            />
          </div> */}

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-green-400 focus:ring-green-400"
              />
              <label className="ml-2 text-sm text-gray-300 font-mono">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-green-400 hover:text-green-300 font-mono">
              Forgot password?
            </a>
          </div> */}

<div className="mt-6 flex justify-center">
        <button className="px-6 py-2 bg-gray-800 border border-green-400 text-green-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 font-mono flex items-center">
          Proceed
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
        </form>

        {/* <div className="mt-6 text-center">
          <span className="text-gray-400 font-mono">{signup?"Already have an acount? ":"Don't have an acount?"}</span>
          <a href={signup?"/login":"signup"} className="text-green-400 hover:text-green-300 font-mono">
          {signup?"LogIn":"Sign Up"}
          </a>
        </div> */}
      </div>
 
    </div>
  );
};
 