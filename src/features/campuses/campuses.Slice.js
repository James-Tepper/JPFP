import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampuses = createAsyncThunk("campuses/fetchCampuses", async () => {
  try{
  const { data } = await axios.get("/api/campuses");
  return data;
  } catch (error) {
    console.log(error);
  }
});
