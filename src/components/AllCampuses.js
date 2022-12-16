// TODO FORMAT SAME AT ALL STUDENTS

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCampusesAsync,
  selectedCampuses,
} from "../features/campusesSlice";
import { removeCampusAsync } from "../features/singleCampusSlice";
import { Link } from "react-router-dom";
import { AddCampus } from "./index.js";
import { selectedStudents } from "../features/studentsSlice";
import { fetchStudentsAsync } from "../features/studentsSlice";

const AllCampuses = () => {
  const dispatch = useDispatch();

  const campuses = useSelector(selectedCampuses);
  const students = useSelector(selectedStudents);

  useEffect(() => {
    console.log("STUDENTS 1", students)
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync());
    console.log("STUDENTS 2", students)
    
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeCampusAsync(id));
  };

  if (!campuses) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div id="container">
        <h1>All Campuses</h1>
        <AddCampus />
        <div className="allCampuses">
          {campuses.length ? (
            campuses.map((campus) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <div className="singleCampus" key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>
                    <h2>Campus: {campus.name}</h2>
                  </Link>
                  <img src={campus.imageUrl} />
                  <p>Address: {campus.address}</p>
                  <p>About Us:{campus.description}</p>
                  <p>
                    Number of students:
                    {
                      students.filter((student) => {
                        return student.campusId == campus.id;
                      }).length
                    }
                  </p>
                  <button
                    className="deleteButton"
                    onClick={() => handleRemove(campus.id)}
                  >
                    Delete Campus
                  </button>
                </div>
              );
            })
          ) : (
            <h1>No Campuses</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AllCampuses;
