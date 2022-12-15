import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleCampus = () => {
  const { campusId } = useParams();
  const [campus, setCampus] = useState({});

  useEffect(() => {
    axios.get(`/api/campuses/${campusId}`).then(campusResponse => {
      setCampus(campusResponse.data);
    });
  }, [campusId]);

  if (!campus) {
    return <p>Loading...</p>;
  }

  return (
    <div id="singleCampus">
      <h1>{campus.name}</h1>
      <img src={`/${campus.imageUrl}`} />
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <Link to={`/campuses/${campus.id}`}>
        <button>Campus</button>
      </Link>
    </div>
  );
};

export default SingleCampus;
