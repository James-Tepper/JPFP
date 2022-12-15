import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleCampus = () => {
  const { campusId } = useParams();
  
  const [student, setStudent] = useState({});
  const [campus, setCampus] = useState({});

  useEffect(() => {
    axios.get(`/api/campuses/${campusId}`).then(campusResponse => {
      setCampus(campusResponse.data);
      console.log("CAMPUS 1", campusResponse.data)
    });
  }, [campusId]);

  if (!campus) {
    return <p>Loading...</p>;
  }

  return (
    <div id="singleCampus">
      {campus.length ? (
        <>
          <h1>{campus.name}</h1>
          <img src={campus.imageUrl} />
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <Link to={`/campuses/${campus.id}`}>
            <button>Campus</button>
          </Link>
        </>
      ) : (
        <h1>No campus</h1>
      )}
    </div>
  );
};

export default SingleCampus;
