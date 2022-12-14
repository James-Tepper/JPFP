import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedCampuses } from "../features/campuses/campusesSlice.js";

const AllCampuses = () => {
  const campuses = useSelector(selectedCampuses);
  return (
    <div className="allCampuses">
      <h1>All Campuses</h1>
      {campuses.length ? (
        campuses.map((campus) => (
          <Link to={`/campuses/${campus.id}`} key={campus.id}>
            {campus.name}
            <div className="singleCampus">
              <h3>{campus.name}</h3>
              <h4>{campus.address}</h4>
              <h4>{campus.description}</h4>
              <img src={campus.imageUrl} />
            </div>
          </Link>
        ))
      ) : (
        <h1>No campuses</h1>
      )}
    </div>
  );
};

export default AllCampuses;
