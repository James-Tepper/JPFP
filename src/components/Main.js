import React from "react";
import { useState, useEffect } from "react";


const Main = ({students , campuses}) => {
    
  const [selectedCampus, setSelectedCampus] = useState(campuses);
  const [selectedStudent, setSelectedStudent] = useState(students);
  
  const filterCampus = (event) => {
    event.preventDefault();
    setSelectedCampus(event.target.value);
    window.location.href = event.target.value;
    };
    
  const filterStudent = (event) => {
    event.preventDefault();
    setSelectedStudent(event.target.value);
    window.location.href = event.target.value;
    }; 
  
  return (
    <>
      <div className="all-campuses">
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
      </div>
    </>
  );
};

export default Main;
