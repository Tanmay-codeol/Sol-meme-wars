// slices/userProfilesSlice.js
import { createSlice } from '@reduxjs/toolkit'; 
import { dummyHotNftType, dummyNftDataProps, dummyNftToPostType, dummyNftType, dummyRecentNftType, dummyTrendingNftType, dummyUserProfilesProps, dummyVisitedNftType } from '../../libs/types'; 
 
export type InitialStateType = {
  profiles: dummyUserProfilesProps,
  nfts: dummyNftType[],
  visitedNft: dummyVisitedNftType[],
  hotNfts:dummyHotNftType[],
  trendingNft:dummyTrendingNftType[],
  recentNft:dummyRecentNftType[],
  nftData: dummyNftDataProps,
  nftToPost:dummyNftToPostType[]
} 

const initialState:InitialStateType = {
  profiles: {}, // Store the dummy data here
  nfts: [],
  visitedNft : [],
  hotNfts: [],
  trendingNft:[]  ,
  recentNft: [],
  nftData:{},
  nftToPost:[]
};

const dymmyDataSlice = createSlice({
  name: 'dummyData',
  initialState,
  reducers: {
    setProfiles(state, action) {
      console.log("setting profiles....");
      console.log(action);
      
      
      state.profiles = action.payload;
    },
    setNfts(state, action) {
      state.nfts = action.payload;
    },
    setVisitedNft(state, action) {
      state.visitedNft = action.payload;
    },
    setHotNfts(state, action) {
      state.hotNfts = action.payload;
    },
    setTrendingNft(state, action) {
      state.trendingNft = action.payload;
    },
    setRecentNfts(state, action) {
      state.recentNft = action.payload;
    },
    setNftData(state, action) {
      state.nftData = action.payload;
    },
    setNftToPost(state, action) {
      state.nftToPost = action.payload;
    },
  },
});

export const { setProfiles,  setNfts, setVisitedNft, setHotNfts,  setTrendingNft, setRecentNfts, setNftData,  setNftToPost } = dymmyDataSlice.actions;
export default dymmyDataSlice.reducer;
