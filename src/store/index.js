import { configureStore } from "@reduxjs/toolkit";

import campusesSlice from "../features/campuses/campusesSlice";
import singleCampusSlice from "../features/singleCampus/singleCampusSlice";

import allStudentsSlice from "../features/allStudents/allStudentsSlice";
import singleStudentSlice from "../features/singleStudent/singleStudentSlice";


const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    singleCampus: singleCampusSlice,
    allStudents: allStudentsSlice,
    singleStudent: singleStudentSlice
  }
});

export default store;
