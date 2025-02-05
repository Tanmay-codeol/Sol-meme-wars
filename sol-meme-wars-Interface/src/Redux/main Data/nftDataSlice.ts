import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { NftDataProp } from '../../libs/types'; 

const API_URL = 'https://solana-meme-wars-backend.vercel.app';

export type Commentprop ={
  id?:number,
  name:string | undefined,
  postId?:number,
  content:string, 
  createdAt:string,
  User?:{
    createdAt: string; // ISO date string
    id: number;
    profileImage:string,
    lastActive: string; // ISO date string
    totalPosts: number;
    totalSales: number;
    username: string | null;
    walletAddress: string;
  }
}

interface NftState { 
  nftData:NftDataProp,
  comments:Commentprop[]
  upvoted?:boolean,
  loading:boolean,  
  loadComment:boolean,
  error:string | any,
}

// Initial state
const initialState: NftState = { 
  //@ts-ignore
  nftData:{},
  comments:[],
  upvoted:false, 
  loading:false,
  error:"",
};

// Fetch NFT by id
export const fetchNftsById = createAsyncThunk<any, string | undefined, { rejectValue: string }>(
  'posts/fetchNftData',
  async (formData, { rejectWithValue }) => {
    try {
      console.log("form data,,,",formData);
      
      const response = await axios.get(`${API_URL}/api/posts`,{
        params:{
          postId:formData
        }
      });
      console.log("data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
); 

type FormDataProp = {
  postId:number,
  user:string  | undefined,
  content:string  | undefined,
}

export const postComment = createAsyncThunk<any , FormDataProp, { rejectValue: string }>(
  'posts/postComment',
  async (formData, { rejectWithValue }) => {
    try {
      console.log("form data for  posted ",formData);
      
      const response = await axios.post(`${API_URL}/api/posts/comment`, formData);
      console.log("poted commet data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
); 

export const fetchComments = createAsyncThunk<any, string | undefined, { rejectValue: string }>(
  'posts/fetchComments',
  async (formData, { rejectWithValue }) => {
    try {
      console.log("form data,,,",formData);
      
      const response = await axios.get(`${API_URL}/api/posts/comment`,{
        params:{
          postId:formData
        }
      });
      console.log("commetns data....");
      console.log(response.data.comments); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
); 



// Slice
const nftDataSlice = createSlice({
  name: 'nftData',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    // Handle fetchNfts
    .addCase(fetchNftsById.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchNftsById.fulfilled, (state, action)=>{
      state.loading = false;
      state.nftData = action.payload;
    })
    .addCase(fetchNftsById.rejected,(state, action)=>{
      state.loading = false
      state.error = action.payload;
    })
    .addCase(fetchComments.pending, (state)=>{
      state.loadComment = true;
    })
    .addCase(fetchComments.fulfilled, (state, action)=>{
      state.loadComment = false;
      state.comments = action.payload.comments;
    })
    .addCase(fetchComments.rejected,(state, action)=>{
      state.loadComment = false
      state.error = action.payload;
    })
    },
});

export const {   } = nftDataSlice.actions

export default nftDataSlice.reducer;
