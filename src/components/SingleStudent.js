import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchSingleStudentAsync } from "../features/singleStudentSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleStudent } from "../features/singleStudentSlice";
import { selectSingleCampus } from "../features/singleCampusSlice";
import { selectedCampuses } from "../features/campusesSlice";

const SingleStudent = () => {
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();
  const { studentId } = useParams();

  console.log(studentId);

  const campus = useSelector(selectedCampuses);
  const student = useSelector(selectSingleStudent);
  const { fullName, id, email, gpa, imageUrl, campusId } = student;

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch]);

  const handleClick = () => {
    setShown((current) => !current);
  };

  return (
    <>
      <div id="container">
        <div id="singleStudentPage">
          <h1>Student ID: {id}</h1>
          <div className="singleStudent">
            <h1>Name: {fullName}</h1>
            <h1>Email: {email}</h1>
            <h1>GPA: {gpa}</h1>
          </div>
          <img src={`/${imageUrl}`} />
          <Link to={`/campuses/${campusId}`}>{`${fullName}'s Campus`}</Link>
        </div>
      </div>
    </>
  );
};

export default SingleStudent;
