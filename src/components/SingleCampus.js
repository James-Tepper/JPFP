import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedStudents } from "../features/studentsSlice";
import { fetchSingleCampusAsync } from "../features/singleCampusSlice";
import { selectSingleCampus } from "../features/singleCampusSlice";

const SingleCampus = () => {
  
  const [shown, setShown] = useState(false);
  
  const dispatch = useDispatch();
  const { campusId } = useParams();
  
  const students = useSelector(selectedStudents);
  const campus = useSelector(selectSingleCampus);
  const { name, description, imageUrl, address } = campus;
  
  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch]);
  
  const handleClick = () => {
    setShown((current) => !current);
  };

  return (
    <>
      <div id="container">
        <h1>Single Campus</h1>
        <div className="singleCampus">
          <h2>Campus: {name}</h2>
          <img src={imageUrl} />
          <p>Address: {address}</p>
          <p>About Us:{description}</p>
          <p>
            Number of students:
            {
              students.filter((student) => {
                return student.campusId == campus.id;
              }).length
            }
          </p>
          <Link to={`/campuses/${campus.id}/edit`}>
            <button className="editButton">Edit Campus</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCampus;
