import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try{
  const { data } = await axios.get(`/students`);
  return data;
  } catch (error) {
    console.log(error);
  }
});

const StudentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchStudentsAsync.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
})

export const selectedStudents = (state) => state.students;

export default StudentsSlice.reducer;
