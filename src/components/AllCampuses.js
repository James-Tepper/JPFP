import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampuses = () => {
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    axios.get("/api/campuses").then(
      (response) => {
        setCampuses(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  });

  return (
    <div className="allCampuses">
      <h1>All Campuses</h1>
      {campuses.length ? (
        campuses.map((campus) => (
          // eslint-disable-next-line react/jsx-key
          <div className="singleCampus">
            <Link to={`/campuses/${campus.id}`} key={campus.id}>
              <h2>Campus: {campus.name}</h2>
            </Link>
            <img src={campus.imageUrl} />
            <p>Address: {campus.address}</p>
            <p>About Us:{campus.description}</p>
          </div>
        ))
      ) : (
        <h1>No Campuses</h1>
      )}
    </div>
  );
};

export default AllCampuses;
