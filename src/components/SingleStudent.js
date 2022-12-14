import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSingleStudentAsync,
  selectSingleStudent,
} from "../features/singleStudent/singleStudentSlice.js";

// import { Campus } from "../../server/database/index.js";

const SingleStudent = async () => {
  // Get student information
  const { studentId } = useParams();
  const student = useSelector(selectSingleStudent);
  const { id, email, imageUrl, gpa, fullName, campusId } = student.info;

  // Get campus id
  // const studentCampusId = await axios.get(Campus.findOne({
  //   where: { id: campusId },
  // }));
  // const { name } = studentCampusId.info;
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch]);

  return (
    <div id="singleStudent">
      <h1>Student: {id}</h1>
      <div className="singleStudent">
        <h1>{fullName}</h1>
        <h1>{email}</h1>
        <h1>GPA: {gpa}</h1>
      </div>
      <img src={`/${imageUrl}`} />
      <Link to={`/campuses/${campusId}`}>
        {`${fullName}'s Campus`}
      </Link>
    </div>
  );
};

export default SingleStudent;
