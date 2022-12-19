import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampusAsync = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const editSingleCampusAsync = createAsyncThunk(
  "singleCampus",
  async ({ id, name, address, description }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${id}`, {
        id,
        name,
        address,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const removeCampusAsync = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const addCampusAsync = createAsyncThunk(
  "singleCampus",
  async ({ name, address, description, imageUrl }) => {
    try {
      const { data } = await axios.post(`/campuses`, {
        name,
        address,
        description,
        imageUrl,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const SingleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchSingleCampusAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
    [removeCampusAsync.fulfilled]: (state, action) => {
      return state.filter((campus) => campus.id !== action.payload.id);
    },
    [addCampusAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const selectSingleCampus = (state) => state.singleCampus;

export default SingleCampusSlice.reducer;
