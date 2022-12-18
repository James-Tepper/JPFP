import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedStudents } from "../features/studentsSlice";
import { fetchSingleCampusAsync } from "../features/singleCampusSlice";
import { selectSingleCampus } from "../features/singleCampusSlice";
import { editSingleCampusAsync } from "../features/singleCampusSlice";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const students = useSelector(selectedStudents);
  const campus = useSelector(selectSingleCampus);
  
  if (!campus) return null;
  
  const [campusName, setCampusName] = useState('');
  const [campusDescription, setCampusDescription] = useState('');
  const [campusAddress, setCampusAddress] = useState('');
  
  useEffect(() => {
    setCampusName(campus.name);
    setCampusDescription(campus.description);
    setCampusAddress(campus.address);
  }, [campus]);
  
  const [shown, setShown] = useState(false);

  
  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch]);

  const toggleEditClick = () => {
    setShown((current) => !current);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editSingleCampusAsync(
      {campusId,
      campusName,
      campusDescription,
      campusAddress}
    ))
    dispatch(fetchSingleCampusAsync(campusId));
    toggleEditClick();
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    dispatch(fetchSingleCampusAsync(campusId));
    toggleEditClick();
  };

  return (
    <>
      <div className="singleCampus">
        <div className="campus">
          <h2>Campus: {campusName}</h2>
          <img src={campus.imageUrl} />
          <p>About Us: {campusDescription}</p>
          <p>Address: {campusAddress}</p>
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
                  onChange={(e) => setCampusDescription(e.target.value)}
                />
              </label>
              <label>
                Edit Address:
                <input
                  type="text"
                  value={campusAddress}
                  onChange={(e) => setCampusAddress(e.target.value)}
                />
              </label>
              <button type="submit">
                Submit
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel Changes
              </button>
            </form>
          ) : null}
        </div>
        <div className="students">
          <h2>Students</h2>
          {students
            .filter((student) => {
              return student.campusId == campus.id;
            })
            .map((student) => {
              return (
                <div key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    <h3>Student: {student.firstName}</h3>
                  </Link>
                  <img src={student.imageUrl} />
                  <p>Email: {student.email}</p>
                  <p>GPA: {student.gpa}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleCampus;
