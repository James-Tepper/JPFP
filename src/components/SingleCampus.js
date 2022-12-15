import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleCampus = () => {
  const { campusId } = useParams();
  const [campus, setCampus] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/api/campuses/${campusId}`).then((campusResponse) => {
      setCampus(campusResponse.data);
    }),
      axios.get("/api/students").then(
        (response) => {
          setStudents(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (!campus) {
    return <p>Loading...</p>;
  }

  return (
      <div id="singleCampusPage">
        <h1>{campus.name}</h1>
        <img className="singleCampusPhoto" src={`/${campus.imageUrl}`} />
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <p>
          Number of students:
          {
            students.filter((student) => {
              return student.campusId == campus.id;
            }).length
          }
        </p>
        <Link to={`/campuses/${campus.id}`}>
          <button>Campus</button>
        </Link>
      </div>
  );
};

export default SingleCampus;
