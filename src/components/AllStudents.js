import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const dispatch = useDispatch();
  
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
    <div className="allStudents">
      <h1>All Students</h1>
      {students.length ? (
        students.map(student => (
          <div className="singleStudent" key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h3>{student.fullName}</h3>
            </Link>
            <h4>
              {campuses.find(campus => campus.id === student.campusId)?.name}
            </h4>
            <h4>{student.email}</h4>
            <h4>{student.gpa}</h4>
            <img src={student.imageUrl} />
          </div>
        ))
      ) : (
        <h1>No Students</h1>
      )}
    </div>
  );
};
    // useEffect(() => {
    //   axios.get("/api/students").then(
    //     (studentsResponse) => {
    //       setStudents(studentsResponse.data) 
    //       for (let student in studentsResponse.data) {
    //         axios.get(`/api/campuses/${student.campusId}`).then(
    //           (campusResponse) => {
    //             setCampuses(campusResponse.data.name)
    //             console.log(campus)
    //           }
    //         )
    //       }
    //     }
    //   )
    // }, )




export default AllStudents;
