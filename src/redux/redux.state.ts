import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';

export type SliderType = {
    image: string,
    title: string,
    category: string,
    collection?: string,
    flavors?: string[],
    description: string,
    price: number,
}[]

type States = {
    sliderData: SliderType,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

// Define initial state
const initialState: States = {
    sliderData: [],
    status: 'idle',
    error: null,
};

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
});

// Define async thunk to fetch slider data
export const fetchSliderData = createAsyncThunk(
    'slider/fetchSliderData',
    async () => {
        try {
            const response = await axiosInstance.get('/api/getall?type=posts');
            return response.data.posts; 
        } catch (error) {
            throw new Error('Error fetching slider data');
        }
    }
);

// Create a slice
const sliderSlice = createSlice({
    name: 'slider',
    initialState,
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

// Export actions and reducer
export const { } = sliderSlice.actions;
export default configureStore({
    reducer: {
        slider: sliderSlice.reducer
    }
});
