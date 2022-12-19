import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchStudentsAsync,
  selectedStudents,
} from "../features/studentsSlice";

import { removeStudentAsync } from "../features/singleStudentSlice";
import {
  fetchCampusesAsync,
  selectedCampuses,
} from "../features/campusesSlice";
import { Link } from "react-router-dom";
import { AddStudent } from "./index.js";

const AllStudents = () => {
  const dispatch = useDispatch();

  const students = useSelector(selectedStudents);
  const campuses = useSelector(selectedCampuses);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeStudentAsync(e.target.value));
  };

  return (
    <>
      <div id="container">
        <h1>All Students</h1>
        <AddStudent />
        <div className="allStudents">
          {students.length ? (
            students.map((student) => (
              // eslint-disable-next-line react/jsx-key
              <div onSubmit={handleRemove} className="singleStudent" key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <h2>Name: {student.fullName}</h2>
                </Link>
                <img src={student.imageUrl} alt="student" />
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
                <Link to={`/campuses/${student.campusId}`}>
                  <p>
                    Campus: 
                    {campuses.filter((campus) => campus.id === student.campusId)
                      .length
                      ? campuses.filter(
                          (campus) => campus.id === student.campusId
                        )[0].name
                      : "N/A"}
                  </p>
                </Link>
                <button type="submit" value="Submit">
                  Delete Student
                </button>
              </div>
            ))
          ) : (
            <h1>No Students</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AllStudents;
