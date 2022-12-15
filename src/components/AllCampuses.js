import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampuses = () => {
  const [campuses, setCampuses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/api/campuses").then(
      (response) => {
        setCampuses(response.data);
      },
      axios.get("/api/students").then(
        (response) => {
          setStudents(response.data);
          console.log(response.data)
        },
      (error) => {
        console.log(error);
      }
    ));
  },[]);

  return (
    <div>
      <h1>All Campuses</h1>
    <div className="allCampuses">
      {campuses.length ? (
        campuses.map((campus) => (
          // eslint-disable-next-line react/jsx-key
          <div className="singleCampus">
            <Link to={`/campuses/${campus.id}`} key={campus.id}>
              <h2>Campus: {campus.name}</h2>
            </Link>
            <img src={campus.imageUrl} />
            <p>Address: {campus.address}</p>
            <p>About Us:{campus.description}</p>
            <p>Number of students: {students.filter(student => {return student.campusId == campus.id}).length}</p>
          </div>
        ))
      ) : (
        <h1>No Campuses</h1>
      )}
    </div>
    </div>
  );
};

export default AllCampuses;
