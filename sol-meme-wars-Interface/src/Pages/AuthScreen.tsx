import React, { ChangeEvent, useEffect, useState } from 'react';
import { ArrowRight, Camera, Plus } from 'lucide-react';
import Cookies from 'js-cookie';
import { toast, Toaster } from 'sonner'
import { useSetRecoilState, } from 'recoil';
import { authPopUpState, verifiedState } from '../libs/atoms';
import { useWallet } from '@solana/wallet-adapter-react';
import base58 from 'bs58';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import { addWallet, FormDataProp, getVerficationMessage } from '../Redux/main Data/AuthSlice';
// import { fetchProfile } from '../Redux/main Data/userProfileSlice';

interface ProfileImageType {
  file: File | null;
  previewUrl: string | null;
}

export const AuthScreen = ({ signup, login }: { signup?: boolean, login?: boolean }) => {
  console.log(login);
  const profile = useSelector((state: RootState) => state.userProile.myProfile)
  const [profileImg, setProfileImg] = useState<ProfileImageType>({
    file: null,
    previewUrl: null
  });
  const { publicKey, signMessage } = useWallet();
  const [formData, setFormData] = useState<FormDataProp>({
    message: '',
    username: '',
    wallet: '',
    signature: '',
    file: null,
  });
  const dispatch = useDispatch<AppDispatch>();

  const generateRandomToken = () => {
    // Generate a random 32-character string
    const randomString = Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  
    return randomString;
  };

  useEffect(() => {
    if (profile) {
      console.log("profile is present......");
      setVerified(true)
      
      // setAuthPopUp(false)
    }  
    else  if (!profile){
      setVerified(false)
    }
  }, [])
 
  const setAuthPopUp = useSetRecoilState(authPopUpState)
  const setVerified = useSetRecoilState(verifiedState)

  const sign = async (messageToSign: string) => {
    try {
      if (!signMessage) {
        throw new Error("Wallet does not support message signing");
      }

      // Encode the message to sign
      const message = new TextEncoder().encode(messageToSign);

      // Sign the message
      const uint8arraySignature = await signMessage(message);

      // Encode the signature to base58
      const signatureBase58: any = base58.encode(uint8arraySignature);

      setFormData((prevData) => {
        const updatedData = {
          ...prevData,
          message: messageToSign,
          signature: signatureBase58,
        };
        return updatedData;
      });


      return {
        ...formData,
        message: messageToSign,
        signature: signatureBase58,
      };
    } catch (e: any) {
      console.log("Could not sign message", e);
    }
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      username: e.target.value
    }))
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    e.preventDefault();
    const file = e.target.files?.[0];
    console.log("setting file,.....", file);
    if (file) {

      // Store both the file and create a preview URL
      setProfileImg({
        file: file,
        previewUrl: URL.createObjectURL(file)
      });
    }

    setFormData((prevData) => ({
      ...prevData,
      file: file || null,     // Ensure `file` is null if undefined 
      wallet: publicKey?.toString() || '', // Ensure `wallet` is a string
    }));

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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username === '' || !profileImg.previewUrl) {
      toast.warning("Please enter all feilds")
      return;
    }
    const toastRef = toast.loading("verfying...")
    // generating a message
    const msg = await dispatch(getVerficationMessage(publicKey?.toString())).unwrap()
  
    const dataa: any = await sign(msg)
    await dispatch(addWallet(dataa)).unwrap();
    setVerified(true)
    const randomToken = generateRandomToken();
    
    // Set the token as a cookie
    Cookies.set("nftToken", randomToken, {
      expires: 7, 
      secure: true,  
    });
    
    toast.dismiss(toastRef)
    setTimeout(() => {
      setAuthPopUp(false)
      // navigate('/')
      setTimeout(() => {
        toast.success('Wallet verified successully!')
      }, 1000);
    }, 1000);
    // toast.success("User Created!")

  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Toaster richColors className=' font-cpmono-heading ' />
      {/* Logo Section */}
      <div className="mb-8 flex items-center space-x-2">
        <img src="/vite.svg" alt="" />
        <span className="text-green-400 text-2xl font-mono font-bold">SOLMEMEWARS</span>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-secondary rounded-lg border border-gray-700 pb-3 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 font-mono">{signup ? "Sign Up" : "SignUp"}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
            Profile Photo
          </label>
          <div className=' flex flex-col  items-center'>
            <div className={`border-2 border-dashed border-gray-600 rounded-lg max-w-[200px] p-4 
                ${profileImg.previewUrl ? 'bg-gray-700' : 'bg-gray-800'} 
                hover:border-green-400 transition-colors duration-200`}>
              {profileImg.previewUrl ? (
                <div className="relative">
                  <img
                    src={profileImg.previewUrl}
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
          {signup && <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={handleChange}
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
              value={formData.username}
              onChange={handleChange}
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
              Verify Wallet
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
