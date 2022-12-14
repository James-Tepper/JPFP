import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import campusesSlice from "../features/campuses/campusesSlice.js";
import { fetchCampusesAsync } from "../features/campuses/campusesSlice.js";

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
          <Link to={`/campuses/${campus.id}`} key={campus.id}>
            <div className="singleCampus">
              <h2>{campus.name}</h2>
              <img src={campus.imageUrl} />
              <p>{campus.address}</p>
              <p>{campus.description}</p>
            </div>
          </Link>
        ))
      ) : (
        <h1>No Campuses</h1>
      )}
    </div>
  );
};

export default AllCampuses;
