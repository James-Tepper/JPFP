import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campuses/campusesSlice";
import singleCampusSlice from "../features/singleCampus/singleCampusSlice";
import studentsSlice from "../features/students/studentsSlice";
import singleStudentSlice from "../features/singleStudent/singleStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    singleCampus: singleCampusSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
  },
});

export default store;
