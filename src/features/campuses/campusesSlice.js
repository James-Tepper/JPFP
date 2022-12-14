import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
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
    [fetchCampusesAsync.fulfilled]: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const selectedCampuses = (state) => state.campuses;

export default CampusesSlice.reducer;
