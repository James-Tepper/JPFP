import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link , Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SingleStudent = () => {
  
  const { studentId } = useParams();
  
  const [student, setStudent] = useState({});
  const [campus, setCampus] = useState({});

  useEffect(() => {
    axios.get(`/api/students/${studentId}`).then(studentResponse => {
      setStudent(studentResponse.data);
    });
    axios.get(`/api/campuses/${student.campusId}`).then(campusResponse => {
      setCampus(campusResponse.data);
    });
  }, [studentId]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div id="singleStudent">
      <h1>Student ID: {student.id}</h1>
      <div className="singleStudent">
        <h1>Name: {student.fullName}</h1>
        <h1>Email: {student.email}</h1>
        <h1>GPA: {student.gpa}</h1>
      </div>
      <img src={`/${student.imageUrl}`} />
      <Link to={`/campuses/${student.campusId}`}>{`${student.fullName}'s Campus`}</Link>
      <Outlet />
    </div>
  );
};

export default SingleStudent;
