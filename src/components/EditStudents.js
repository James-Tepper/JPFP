import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


// TODO: Add a form to edit a student's information || delete a student

const EditStudents = () => {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);
  
  useDispatch();
  
  useEffect(() => {
    axios.get("/api/students").then(studentsResponse => {
      setStudents(studentsResponse.data);
      for (let student of studentsResponse.data) {
        axios.get(`/api/campuses/${student.campusId}`).then(campusResponse => {
          setCampuses(campuses => [...campuses, campusResponse.data]);
        });
      }
    });
  }, []);

  return (
    <div>
      <h1>All Students</h1>
    <div className="allStudents">
      {students.length ? (
        students.map(student => (
          <div className="singleStudent" key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h3>Student: {student.fullName}</h3>
            </Link>
            <Link to={`/campuses/${student.campusId}`}>
            <h4>School: {campuses.find(campus => campus.id === student.campusId)?.name}</h4>
            </Link>
            <h4>Email: {student.email}</h4>
            <img src={student.imageUrl} />
            <h4>GPA: {student.gpa}</h4>
          </div>
        ))
      ) : (
        <h3>No Students</h3>
      )}
    </div>
    </div>
  );
};

export default EditStudents;
