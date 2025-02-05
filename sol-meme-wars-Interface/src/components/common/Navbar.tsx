import { ChevronDown, Search } from "lucide-react"
import { Logo } from "../../assets/icons/Logo"
import { useLocation } from "react-router-dom" 

import { 
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
 
// import { useState } from "react";

import '@solana/wallet-adapter-react-ui/styles.css'
import { AnimatePresence, motion } from "framer-motion"
import { PostNft } from "./PostNft";
import { useRecoilState } from "recoil";
import { authPopUpState,   popupState, verifiedState } from "../../libs/atoms"; 
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect } from "react" 
import { AuthScreen } from "../../Pages/AuthScreen"
// import { EditProfile } from "../../Pages/Dashboard"
import {  RootState } from "../../Redux/store"
import {  useSelector } from "react-redux" 
// import Cookies from 'js-cookie';
// import { useWallet } from "@solana/wallet-adapter-react";

export const Navbar = () => { 
  // const [connected, SetConnected] = useState(false);
  const params = useLocation();
  // const wallet  = useWallet()  
  const [postNft, setPostNft] = useRecoilState(popupState);
  const { publicKey, connected } = useWallet();  
  const [authPopUp, setAuthPopUp] = useRecoilState(authPopUpState)
  const [verfied, setVerified] = useRecoilState(verifiedState)
  // const [editProfile, setEditProfile] = useRecoilState(editProfileState);
  const {myProfile} = useSelector((state:RootState)=>state.userProile) 
  console.log("current proffile....",myProfile); 
  
  if(myProfile){
    setVerified(true)
  }

  useEffect(() => {
    console.log("wallet connected......"); 
  if(verfied){
      setAuthPopUp(false);
    }
   else if((!verfied && authPopUp)|| connected){
      setAuthPopUp(true)
    }
  }, [connected, publicKey, verfied]);

   
 
  useEffect(() => {
    let timeoutId:any;
    console.log("verfied...");
    console.log(verfied);
    // setVerified(true)
    
    const handleConnectionCheck = () => {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set a small timeout to wait for stable connection state
      timeoutId = setTimeout(() => {
        if (!publicKey && !connected) {
          console.log("Wallet disconnected - setting verified to false");
          setVerified(false);
        }
      }, 3000); // 500ms delay to allow connection to stabilize
    };
    
    handleConnectionCheck();
    
    // Cleanup timeout on unmount or deps change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [connected, publicKey, setVerified]);
 

  console.log('params = ', params);


  return (!(params.pathname === '/signup' || params.pathname === '/login') &&
    // <ConnectionProvider endpoint={endpoint}>
    //   <WalletProvider wallets={[]} autoConnect>
        // <WalletModalProvider>
          <div className=" border-b border-gray-600 text-gray-300 fixed w-full top-0 z-50  bg-[#111314]">
            <div className="  flex gap-7 items-center text-[12.7px] font-cpmono-normal font-semib old px-5 w-full">
              <div className=" flex items-center gap-3 font-cpmono-heading">
                <a href="/" className=" flex justify-center items-center">
                  <Logo />
                  <p className=" w- 28 uppercase neon-text">Solmemewars</p>
                </a>
                <div className=" flex ml-3 gap-3 items-center justify-center">
                  {/* <p className="nav-text w-20  cursor-pointer uppercase font-bold text-[17px] text-nav">Trade<ChevronDown size={16} className=" inline ml-2 " /></p> */}
                  <p
                  onClick={()=>setPostNft(true)}
                   className="nav-text w-36 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Post NFT<ChevronDown size={16} className=" inline ml-2 " /></p>
                  <p className="nav-text w-44 ml-3  cursor-pointer uppercase font-bold text-[17px] text-nav">Trending NFT<ChevronDown size={16} className=" inline ml-2 " /></p>
                  {/* <p className=" w-64 text-gray-300 uppercase neon-pink-star"> <Star size={17} className=" fill-[#FF8AAD]  neon-pink-star inline"/> rewards<ChevronDown size={16} className=" inline ml-2 "/></p>   */}
                </div>
              </div>
              <div className=" flex gap-2 px-2 border w-full border-gray-800 rounded-md items-center">
                <Search width={17} />
                <div className="">
                  <input type="text" placeholder="Search by Collection" className=" py-2 bg-transparent w-full text-[13px] outline-none" />
                </div>
              </div>


             {/* { Cookies.get('nftToken') && publicKey && <div 
              onClick={()=>setEditProfile(true)}
              className=" bg-priceUp rounded-full p-[1px] cursor-pointer"> 
                <img src={myProfile?.profileImage || localStorage.getItem("imgUrl") || undefined}  className=" rounded-full"  width={100} alt="" /> 
                
              </div>} */}

              <div className=" w-[500px] flex justify-end items-center">
                {/* <button className=" text-black font-bold font-cpmono-heading px-3 py-[6px] rounded-md bg-[#8EFBC1]  uppercase ">connect wallet </button> */}
                <div className=" flex gap-1">
                  <div onClick={() => {
                    console.log("connect clicked! ");
                    // SetWalletConnect(true)
                  }}>

                    <WalletMultiButton
                    //  onClick={()=>SetConnected(true)}
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: "'CP Mono Heading', monospace",
                        lineHeight:"17px",
                        padding: "1px 12px",
                        borderRadius: "0.375rem", // 
                        // rounded-md
                      //   width:"150px",
                      //   // overflow:"hidden",
                      //   // text-overflow: 'ellipsis',
                      //   // white-space: 'nowrap',
                      //   overflow:"hidden",
                      // textOverflow:"ellipsis",
                      // whiteSpace:"nowrap",
                        backgroundColor: "#8EFBC1",
                        textTransform: "uppercase"
                      }}
                      className=" font-bold   font-cpmono-heading truncate "
                    > 
                    {/* {!wallet.publicKey?"Connect Wallet":wallet.publicKey?.toString()} */}
                    </WalletMultiButton>
                  </div>
                  <div   >
                    {/* <WalletDisconnectButton /> */}
                  </div>
                </div>
                <ChevronDown size={16} className=" inline ml-2 " />
              </div>
            </div>
          
          {/* Post Nft popup */}
            <AnimatePresence>
     { postNft && <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50" 
     >
      <div className=' overflow-y-scroll no-scrollbar w-full max-w-xl z-[99999] '>
          <PostNft/>
      </div>
     </motion.div>}
      </AnimatePresence>

          {/* Auth popup */}
      <AnimatePresence>
     { authPopUp && <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50" 
     >
      <div className=' overflow-y-scroll no-scrollbar w-full max-w-xl z-[99999] '>
          <AuthScreen/>
      </div>
     </motion.div>}
      </AnimatePresence>

          {/* Edit Profile popup */}
      {/* <AnimatePresence>
     { editProfile && <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50" 
     >
      <div className=' overflow-y-scroll no-scrollbar w-full max-w-xl z-[99999] '>
          <EditProfile/> 
      </div>
     </motion.div>}
      </AnimatePresence> */}
          </div>
        //  {/* </WalletModalProvider> */}
  //  {/* //   </WalletProvider>
  //   // </ConnectionProvider> */}
  )
} 