import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AllStudents = () => {
  
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      axios.get("/api/students").then(
        (response) => {
          setStudents(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
    
  
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
