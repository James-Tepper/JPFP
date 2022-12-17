import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedStudents } from "../features/studentsSlice";
import { fetchSingleCampusAsync } from "../features/singleCampusSlice";
import { selectSingleCampus } from "../features/singleCampusSlice";
import { editSingleCampusAsync } from "../features/singleCampusSlice";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const students = useSelector(selectedStudents);
  const campus = useSelector(selectSingleCampus);
  const { name, description, imageUrl, address } = campus;

  const [shown, setShown] = useState(false);

  const [campusName, setCampusName] = useState(name);
  const [campusDescription, setDescription] = useState(description);
  const [campusAddress, setAddress] = useState(address);

  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch]);

  const toggleEditClick = () => {
    setShown((current) => !current);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editSingleCampusAsync(
        campusId,
        campusName,
        campusDescription,
        campusAddress
      )
    );
    toggleEditClick();
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
          <button className="editButton" onClick={toggleEditClick}>
            Edit Campus
          </button>
          {shown ? (
            <form onSubmit={handleEdit}>
              <label>
                Edit Campus Name:
                <input
                  type="text"
                  value={campusName}
                  onChange={(e) => setCampusName(e.target.value)}
                />
              </label>
              <label>
                Edit About Us:
                <input
                  type="text"
                  value={campusDescription}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label>
                Edit Campus Address:
                <input
                  type="text"
                  value={campusAddress}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <button type="submit">Save</button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SingleCampus;
