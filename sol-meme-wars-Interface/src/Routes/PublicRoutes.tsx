import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/HomeScreen";
import { Navbar } from "../components/common/Navbar";
import { UserProfile } from "../Pages/UserProfile";
import { NftPage } from "../Pages/NftPage"; 
import { AuthScreen } from "../Pages/AuthScreen";

export const PublicRoutes = ()=>{
  
  return <div>
   <Router>
    <Navbar/>
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/profile/:userName" element={<UserProfile/>} />
    <Route path="/nft/:nftName" element={<NftPage/>} /> 
    <Route path="/login" element={<AuthScreen />} />  
  </Routes>
 </Router>
  </div>
}