import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { userProfilesProps } from '../../libs/types';

const API_URL = 'https://solana-meme-wars-backend.vercel.app';

interface ProfileState {
  profile: userProfilesProps | null;  
  myProfile: userProfilesProps | null;
  loading1: boolean;
  loading2: boolean;
}

const initialState: ProfileState = {
  profile: null, 
  myProfile: null,
  loading1: false,
  loading2: false,
};

export const fetchProfile = createAsyncThunk<any, string|undefined, { rejectValue: string }>(
  'profile/fetchProfile',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/user`, {
        params: { wallet: formData }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  }
);

export const fetchCurrentProfile = createAsyncThunk<any, string|undefined, { rejectValue: string }>(
  'profile/fetchCurrentProfile',
  async (formData, { rejectWithValue }) => {
    if (!formData) {
      return rejectWithValue('No wallet address provided');
    }
    try {
      console.log("fetching profile for wallet:", formData);
      const response = await axios.get(`${API_URL}/api/user`, {
        params: { wallet: formData }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  }
);

export type proileDataProp = {
  file: File | null,
  username: string | undefined | null,
}

export const updateProfile = createAsyncThunk<any, proileDataProp, { rejectValue: string }>(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/user`, profileData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to update profile');
    }
  }
);

const userProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.myProfile = null;
      localStorage.removeItem("imgUrl");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading1 = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<userProfilesProps>) => {
        state.loading1 = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.loading1 = false;
        state.profile = null;
      })
      .addCase(fetchCurrentProfile.pending, (state) => {
        state.loading2 = true;
        // Clear existing profile when starting a new fetch
        state.myProfile = null;
      })
      .addCase(fetchCurrentProfile.fulfilled, (state, action: PayloadAction<userProfilesProps>) => {
        state.loading2 = false;
        if (action.payload) {
          localStorage.setItem("imgUrl", action.payload.profileImage || "");
          state.myProfile = action.payload;
        }
      })
      .addCase(fetchCurrentProfile.rejected, (state) => {
        state.loading2 = false;
        state.myProfile = null;
        localStorage.removeItem("imgUrl");
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading2 = true;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<userProfilesProps>) => {
        state.loading2 = false;
        state.myProfile = action.payload;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading2 = false;
      });
  },
});

export const { resetProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;