  
import './styles/index.css'
import './styles/App.css' 
 
import { PublicRoutes } from './Routes/PublicRoutes';
import { useDispatch } from 'react-redux';   
import { useEffect } from 'react'; 
import { dummyHotNft, dummyNft, dummyNftData, dummyNftToPost, dummyRecentNft, dummyTrendingNft, dummyUserProfiles, dummyVisitedNft } from './data/dummyData';
import { setHotNfts, setNftData, setNfts, setNftToPost, setProfiles, setRecentNfts, setTrendingNft, setVisitedNft } from './Redux/dummyData/dummyDataSlice';
function App() { 

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setNfts(dummyNft))
    dispatch(setVisitedNft(dummyVisitedNft))
    dispatch(setHotNfts(dummyHotNft))
    dispatch(setTrendingNft(dummyTrendingNft))
    dispatch(setRecentNfts(dummyRecentNft))
    dispatch(setNftData(dummyNftData))
    dispatch(setProfiles(dummyUserProfiles))
    dispatch(setNftToPost(dummyNftToPost))
  },[dispatch])

  return (
     <PublicRoutes/> 
  )
}

export default App
