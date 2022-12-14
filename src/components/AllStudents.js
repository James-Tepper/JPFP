import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedStudents } from "../features/students/studentsSlice.js";

const AllStudents = () => {
  const students = useSelector(selectedStudents);
  return (
    <div className="allStudents">
      <h1>All Students</h1>
      {students.length ? (
        students.map((student) => (
                <Link to={`/students/${student.id}`} key={student.id}>
          <div className="singleStudent">
                <h3>
                  {student.fullName}
                </h3>
                <h4>{student.email}</h4>
                <h4>{student.gpa}</h4>
                <img src={student.imageUrl} />
              </div>
            </Link>
        ))
       ) : (
        <h1>No Students</h1>
      )
    }
    </div>
  );
};

export default AllStudents;
