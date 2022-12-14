import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSingleCampus = createAsyncThunk("singleCampus", async (id) =>{
  try {
    const { data } = await axios.get(`campuses/${id}`)
    return data
  }catch(err){
    console.log(err)
  }
})

const SingleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchSingleCampus.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
})

export const selectSingleCampus = (state) => state.singleCampus;


export default SingleCampusSlice.reducer;
