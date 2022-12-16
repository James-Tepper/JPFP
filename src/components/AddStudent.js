import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudentAsync } from "../features/singleStudentSlice.js";
import { selectedCampuses } from "../features/campusesSlice.js";
import { fetchStudentsAsync } from "../features/studentsSlice.js";

const AddStudent = () => {
  const dispatch = useDispatch();

  const campuses = useSelector(selectedCampuses);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [campusId, setCampusId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addStudentAsync({ firstName, lastName, email, gpa, campusId }));
    setFirstName("");
    setLastName("");
    setEmail("");
    setGpa("");
    setCampusId("");
  };

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <div id="addStudent">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          GPA:
          <input
            type="text"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </label>
        <label>
          Campus:
          <select
            value={campusId}
            onChange={(e) => setCampusId(e.target.value)}
          >
            <option value="">Select a Campus</option>
            {campuses.map((campus) => (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddStudent;
