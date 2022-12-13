// ! TODO TEST THIS

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCampuses = createAsyncThunk("allCampuses", async () => {
  try{
  const { data } = await axios.get(`/campuses`);
  return data;
  } catch (error) {
    console.log(error);
  }
});

const CampusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCampuses.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
})

export const selectedCampuses = (state) => state.campuses;

export default CampusesSlice.reducer;
