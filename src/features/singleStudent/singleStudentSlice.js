import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudent = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const SingleStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchSingleStudent.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

export const selectSingleStudent = (state) => state.singleStudent;

export default SingleStudentSlice.reducer;
