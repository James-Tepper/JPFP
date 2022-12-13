import React from "react";
import { useSelector } from "react-redux";
import { selectStudents } from "../features/students/studentsSlice.js";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const students = useSelector(selectStudents);
  return (
    <div className="allStudents">
      <h1>All Students</h1>
      {students.length ? (
        students.map((student) => (
          <Link
            to={`/students/${student.id}`}
            key={`All Students: ${student.id}`}
          >
            <div className="singleStudent">
              <img src={student.imageUrl} />
              <h3>
                {student.firstName} {student.lastName}
              </h3>
              <h4>{student.email}</h4>
              <h4>{student.gpa}</h4>
            </div>
          </Link>
        ))
      ) : (
        <h1>No Students</h1>
      )}
    </div>
  );
};

export default AllStudents;
