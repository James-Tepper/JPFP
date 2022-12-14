import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import campusesSlice, { selectedCampuses } from "../features/campuses/campusesSlice.js";
import { fetchCampusesAsync } from "../features/campuses/campusesSlice.js";

const AllCampuses = () => {
  // Get all campuses
  const campuses = useSelector(selectedCampuses);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }
  , [dispatch]);
  
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
