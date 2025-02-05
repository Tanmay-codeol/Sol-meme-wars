import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { dummyNftToPostType, NftDataProp } from '../../libs/types';
import { FormDataType } from '../../components/common/PostNft';

const API_URL = 'https://solana-meme-wars-backend.vercel.app';


interface NftState {
  nfts: NftDataProp[],
  nftsToPost:dummyNftToPostType[]
  upvoted:boolean,
  loadingPostNft:boolean, 
  loadingFetchNft:boolean,
  loadingUserNft:boolean,
  nftsUpdated:boolean,
  error:string | any,
}

// Initial state
const initialState: NftState = {
  nfts: [],
  nftsToPost:[],
  upvoted:false,
  loadingPostNft:false,
  loadingFetchNft:false,
  loadingUserNft:false,
  nftsUpdated:false,
  error:"",
};

// Fetch NFTs  
export const fetchNfts = createAsyncThunk<NftDataProp[], void, { rejectValue: string }>(
  'nfts/fetchNfts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<NftDataProp[]>(`${API_URL}/api/posts`);
      console.log("data....");
      console.log(response.data); 
        
      return response.data; // Assume the API returns an array of profiles
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
);
 
type formDataType = {
   address: string | undefined,
   notPosted?:  boolean | undefined,  
}

// Fetch User Nfts
export const userNfts = createAsyncThunk< any, formDataType | undefined>(
  'nfts/userNfts',
  async (formData , { rejectWithValue }) => {
    console.log("form data....");
    console.log(formData);
    try {
      const response = await axios.get(`${API_URL}/api/nfts/wallet`,{
        params: formData
      });
      console.log("data....");
      console.log(response.data); 
      return response.data.nfts;  
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || 'Failed to fetch profiles');
    }
  }
);


// Post Nfts
export const postNfts = createAsyncThunk< any, FormDataType, { rejectValue: string }>(
  'nfts/postNfts',
  async (formData , { rejectWithValue }) => {
    console.log("form data....");
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/api/posts`,formData);
      console.log("data....");
      console.log(response.data); 
      if(response.data.error){
        console.log("errorrrrrrrrrr");
         
        throw new Error(response.data.error);
      } else{
        return response.data
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

type newFormDatatype =  {
  postId:number,
  user:string | undefined,
}
// Post upVotes
export const upVotes = createAsyncThunk< any, newFormDatatype, { rejectValue: string }>(
  'nfts/upvotes',
  async (formData , { rejectWithValue }) => {
    console.log("form data....");
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/api/posts/upvote`,formData);
      console.log("data....");
      console.log(response.data); 
      if(response.data.error){
        console.log("errorrrrrrrrrr");
         
        throw new Error(response.data.error);
      } else{
        return response.data
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Post downVotes
export const downVotes = createAsyncThunk< any, newFormDatatype, { rejectValue: string }>(
  'nfts/downvotes',
  async (formData , { rejectWithValue }) => {
    console.log("form data....");
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/api/posts/downvote`,formData);
      console.log("data....");
      console.log(response.data); 
      if(response.data.error){
        console.log("errorrrrrrrrrr");
         
        throw new Error(response.data.error);
      } else{
        return response.data
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


// Slice
const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      // Handle fetchNfts
      .addCase(fetchNfts.pending, (state) => {
        state.loadingFetchNft = true;
      })
      .addCase(fetchNfts.fulfilled, (state, action : PayloadAction<NftDataProp[]>) => {
        state.loadingFetchNft = false;
        state.nfts = action.payload; // Set the profile object
      })
      .addCase(fetchNfts.rejected, (state) => {
        state.loadingFetchNft = false;
      })
      .addCase(userNfts.pending, (state) => {
        state.loadingUserNft = true;
      })
      .addCase(userNfts.fulfilled, (state, action) => {
        state.loadingUserNft = false; 
        state.nftsToPost = action.payload

      })
      .addCase(userNfts.rejected, (state) => {
        state.loadingUserNft = false;
      })
      .addCase(postNfts.pending, (state) => {
        state.loadingPostNft = true;
      })
      .addCase(postNfts.fulfilled, (state ) => {
        state.loadingPostNft = false; 
        state.nftsUpdated = !state.nftsUpdated; // Set the profil/ /
      })
      .addCase(postNfts.rejected, (state, action) => {
        // state.nftsUpdated = !state.nftsUpdated; // Set the profil/ /
        state.loadingPostNft = false;
        console.log("error happened......."); 
        console.log(action);
        
        state.error = action.payload;
        
        
        // state.error = action.payload
      })
      // .addCase(upVotes.pending, (state) => {
      //   // state.loadingPostNft = true;
      // })
      // .addCase(upVotes.fulfilled, (state) => {
      //   // state.loadingPostNft = false; 
      //   state.upvoted = true;// Set the profil/ /
      // })
      // .addCase(upVotes.rejected, (state, action) => { 
      //   console.log("error happened......."); 
      //   console.log(action);
        
      //   state.error = action.payload;
        
        
      //   // state.error = action.payload
      // }) 
      // .addCase(downVotes.pending, (state) => {
      //   // state.loadingPostNft = true;
      // })
      // .addCase(downVotes.fulfilled, (state) => {
      //   // state.loadingPostNft = false; 
      //   state.upvoted = true;// Set the profil/ /
      // })
      // .addCase(downVotes.rejected, (state, action) => { 
      //   console.log("error happened......."); 
      //   console.log(action);
        
      //   state.error = action.payload;
        
        
      //   // state.error = action.payload
      // }) 
    },
});

export const {   } = nftSlice.actions

export default nftSlice.reducer;
