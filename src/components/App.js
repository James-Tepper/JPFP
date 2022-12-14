import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { fetchCampusesAsync } from "../features/campuses/campusesSlice.js";
import { fetchStudentsAsync } from "../features/students/studentsSlice.js";

import {
  Navbar,
  AllCampuses,
  SingleCampus,
  AllStudents,
  SingleStudent,
} from "./index.js";

// import { getCampuses } from "../features/campuses/campusesSlice.js";
// import { getStudents } from "../features/students/studentsSlice.js";
// import selectSingleCampus from "../features/singleCampus/singleCampusSlice.js";
// import selectSingleStudent from "../features/singleStudent/singleStudentSlice.js";

const App = () => {
  
  const dispatch = useDispatch();

  // const selectedCampus = useSelector(selectSingleCampus);
  // const selectedStudent = useSelector(selectSingleStudent);

  // const campuses = useSelector(getCampuses);
  // const students = useSelector(getStudents);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <Navbar />
      <Routes>
        {/* maybe make a "/" (home path) */}
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/campuses/:campusId" element={<SingleCampus />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path="*">404: Not Found</Route>
      </Routes>
    </div>
  );
};

export default App;

/* <div className="all-campuses">
        <select name="campuses" onChange={filterCampus}>
          <option value="all">All Campuses</option>
          {campuses.map((campus) => (
            <option key={campus.id} value={`/campuses/${campus.id}`}>{campus.name}</option>
          ))}
        </select>
      </div>
      <div className="all-students">
        <select name="students" onChange={filterStudent}>
          <option value="all">Student</option>
          {students.map((student) => (
            <option key={student.id} value={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</option>
          ))}
        </select>
      </div> */
