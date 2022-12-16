import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campusesSlice";
import singleCampusSlice from "../features/singleCampusSlice";
import studentsSlice from "../features/studentsSlice";
import singleStudentSlice from "../features/singleStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    singleCampus: singleCampusSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
  },
});

export default store;
