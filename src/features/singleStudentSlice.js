import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudentAsync = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeStudentAsync = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);


export const addStudentAsync = createAsyncThunk(
  "singleStudent",
  async ({ firstName, lastName, email, gpa, campusId }) => {
    try {
      const { data } = await axios.post(`/api/students`, {
        firstName,
        lastName,
        email,
        gpa,
        campusId,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
)



const SingleStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchSingleStudentAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
    [removeStudentAsync.fulfilled]: (state, action) => {
      return state.filter(student => student.id !== action.payload.id);
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

export const selectSingleStudent = (state) => state.singleStudent;

export default SingleStudentSlice.reducer;
