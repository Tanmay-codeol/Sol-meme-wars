// store.js
import { configureStore } from '@reduxjs/toolkit';
import dummyDataReducer from './dummyData/dummyDataSlice';
import nftSliceReducer from './main Data/nftsSlice';
import nftDataSliceReducer from './main Data/nftDataSlice';
import authSliceReducer from './main Data/AuthSlice';
import userProfileSlice from './main Data/userProfileSlice';


const store = configureStore({
  reducer: {
    dummyData: dummyDataReducer,
    nft :nftSliceReducer,
    nftData:nftDataSliceReducer,
    auth:authSliceReducer,
    userProile:userProfileSlice,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
