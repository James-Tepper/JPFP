import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSingleCampusAsync = createAsyncThunk("singleCampus", async (id) =>{
  try {
    const { data } = await axios.get(`/campuses/${id}`)
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
    [fetchSingleCampusAsync.fulfilled]: (state, action) => {
      return state.concat(action.payload);
    }
  }
})

export const selectSingleCampus = (state) => state.singleCampus;


export default SingleCampusSlice.reducer;
