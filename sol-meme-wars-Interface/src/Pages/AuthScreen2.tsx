
// /* eslint-disable */
// // @ts-nocheck

// import { useState, useEffect } from "react";
// import {
//   useWallet,
//   WalletNotConnectedError,
// } from "@solana/wallet-adapter-react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import "@solana/wallet-adapter-react-ui/styles.css";
// import base58 from "bs58";
// import axios from "axios";
// // import { BackendURL } from "../utils/constants/url.ts";
// // import addWalletImage from "/assets/images/add-wallet.svg";


// export const AuthScreen2 = () => {
//   const { publicKey, signMessage, wallet } = useWallet();
//   const [signature, setSignature] = useState();
//   const [walletConnected, setWalletConnected] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");


//   useEffect(() => {
//     if (publicKey && !walletConnected) {
//       setWalletConnected(true);
//       console.log("public key / wallet ", publicKey);
//       getVerificationMessage(publicKey.toBase58());
//     } else if (!publicKey) {
//       setWalletConnected(false);
//     }
//   }, [publicKey, walletConnected]);

//   const getVerificationMessage = async (walletAddress) => {
//     const token =
//       localStorage.getItem("authToken") || localStorage.getItem("accessToken");
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     try {
//       const response = await axios.post(
//         `sdfs/user/getVerificationMessage`,
//         { walletAddress },
//         { headers }
//       );
//       if (response.data.success) {
//         setVerificationMessage(response.data.data);
//         sign(response.data.data);
//       } else {
//         console.log("Failed to get verification message");
//       }
//     } catch (error) {
//       console.log("Error fetching verification message", error);
//     }
//   };

//   const sign = async (messageToSign) => {
//     try {
//       if (!signMessage) {
//         throw new Error("Wallet does not support message signing");
//       }
//       const message = new TextEncoder().encode(messageToSign);
//       const uint8arraySignature = await signMessage(message);
//       const signatureBase58 = base58.encode(uint8arraySignature);

//       setSignature(signatureBase58);
//       addWallet(publicKey.toBase58(), messageToSign, signatureBase58);
//     } catch (e) {
//       console.log("Could not sign message", e);
//       setErrorMessage(e.message);
//     }
//   };

//   const addWallet = async (publicKey, message, signature) => {
//     const token =
//       localStorage.getItem("authToken") || localStorage.getItem("accessToken");
//     try {
//       const response = await axios.post(
//         `${BackendURL}/user/addWallet`,
//         {
//           publickey: publicKey,
//           message,
//           signature,
//           defaultWallet: true,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         console.log("Wallet verified successfully");
//         console.log(response);
//       } else {
//         console.log("Failed to verify wallet");
//       }
//     } catch (error) {
//       console.log("Error adding wallet", error);
//     }
//   };

//   return (
//     <div>

//       {/* Custom button with transparent background, black text, and start icon */}
//       <WalletMultiButton
//         endIcon={null}
//         // startIcon={addWalletImage}
//         className="border border-gray-500 text-black px-4 py-2 rounded-md hover:bg-gray-200 flex items-center space-x-2"
//         style={{
//           backgroundColor: "transparent", // Transparent background
//           height: 0,
//           padding: 0
//         }}
//       >
//         {/* Start Icon */}
//         <img 
//         // src={addWalletImage}
//          className="w-5 h-5 mr-2" />
//         <h1 className="text-[#576175] text-sm font-medium">
//           Add Wallet
//         </h1>
//       </WalletMultiButton>
//       {/* <div>{walletConnected ? "Walet Added!" : ""}</div>
//       {wallet && !signMessage && (
//         <div>Wallet does not support message signing</div>
//       )}
//       <div>{signature ? `Signature: ${signature}` : ""}</div>
//       {errorMessage && <div>Error: {errorMessage}</div>} */}
//     </div>
//   );
// }; 