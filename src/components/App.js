import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { fetchCampusesAsync } from "../features/campusesSlice.js";
import { fetchStudentsAsync } from "../features/studentsSlice.js";

import {
  Navbar,
  AllCampuses,
  SingleCampus,
  AllStudents,
  SingleStudent,
  // EditStudents,
  // EditCampuses,
  AddCampus,
  AddStudent,
} from "./index.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/campuses/:campusId" element={<SingleCampus />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path="/students/add" element={<AddStudent />} />
        
        <Route path="/campuses/add" element={<AddCampus />} />

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
