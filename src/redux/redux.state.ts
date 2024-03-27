import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type UserType = {
    _id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    image: string,
}[]

export type SliderType = {
    _id: string,
    image: string,
    title: string,
    category: string,
    collection?: string,
    flavors?: string[],
    description: string,
    price: number,
}[]

type SliderState = {
    sliderData: SliderType,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

type UserState = {
    userData: UserType,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

// Define initial state
const initialSliderState: SliderState = {
    sliderData: [],
    status: 'idle',
    error: null,
};

const initialUserState: UserState = {
    userData: [],
    status: 'idle',
    error: null,
};

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
});

// Define async thunk to fetch slider data
export const fetchSliderData = createAsyncThunk(
    'slider/fetchSliderData',
    async () => {
        try {
            const response = await axiosInstance.get('/api/getall?type=posts');
            return response.data.posts as SliderType;
        } catch (error) {
            throw new Error('Error fetching slider data');
        }
    }
);

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        try {
            const response = await axiosInstance.get('/api/getall?type=users');
            return response.data.users as UserType;
        } catch (error) {
            throw new Error('Error fetching user data');
        }
    }
);

// Create a slider slice
const sliderSlice = createSlice({
    name: 'slider',
    initialState: initialSliderState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSliderData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSliderData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.sliderData = action.payload; 
            })
            .addCase(fetchSliderData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

// Create a user slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userData = action.payload; 
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

// Export actions and reducers
export const { } = sliderSlice.actions;
export const { } = userSlice.actions;

export default configureStore({
    reducer: {
        slider: sliderSlice.reducer,
        user: userSlice.reducer,
    }
});
