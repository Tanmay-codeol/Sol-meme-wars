import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';   
const API_URL = 'https://solana-meme-wars-backend.vercel.app';

export type AuthState ={
  verificationMessage:string,
   loading:boolean,
   error:string | undefined
}
 
// Initial state
const initialState: AuthState = {  
  verificationMessage:"",
  loading:false,
  error:"",
};

// Fetch NFT by id
export const getVerficationMessage = createAsyncThunk<any, string|undefined, { rejectValue: string }>(
  'wallet/getVerficationMessage',
  async (formData, { rejectWithValue }) => {
    try {
      console.log("siging a message....//////");
      
      console.log("form data,,,",formData);
      
      const response = await axios.post(`${API_URL}/api/login/generateMessage`,{
        wallet:formData
      });
      console.log("data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
); 
 
export type FormDataProp = {
  message:string,
  username:string,
  wallet:string,
  signature:string,
  file:File | null,
}

export const addWallet = createAsyncThunk<any , FormDataProp, { rejectValue: string }>(
  'wallet/addWallet',
  async (formData, { rejectWithValue }) => { 
 
    try {

      console.log("form data for  posted ",formData);
      
      const response = await axios.post(`${API_URL}/api/uploadImage`, formData,{
        headers:{
          "Content-Type": "multipart/form-data", // Correct header for FormData
        }
      });
      console.log("poted commet data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
); 



// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    // Handle fetchNfts
    .addCase(getVerficationMessage.pending, (state)=>{
      state.loading = true;
    })
    .addCase(getVerficationMessage.fulfilled, (state,action)=>{
      state.loading = false; 
      console.log("action..",action );
      state.verificationMessage = action.payload
    })
    .addCase(getVerficationMessage.rejected,(state, action)=>{
      state.loading = false 
      
      state.error = action.payload;
    })
    .addCase(addWallet.pending, (state)=>{
      state.loading = true;
    })
    .addCase(addWallet.fulfilled, (state)=>{
      state.loading = false; 
    })
    .addCase(addWallet.rejected,(state, action)=>{
      state.loading = false
      state.error = action.payload;
    })
    },
});

export const {   } = authSlice.actions

export default authSlice.reducer;
