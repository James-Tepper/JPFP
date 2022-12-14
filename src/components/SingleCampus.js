import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectSingleCampus } from "../features/singleCampus/singleCampusSlice.js";

import fetchSingleCampusAsync from "../features/singleCampus/singleCampusSlice.js";

const SingleCampus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector(selectSingleCampus);

  useEffect(() => {
    dispatch(fetchSingleCampusAsync(id));
  }, [dispatch]);

  return (
    <div id="singleCampus">
      {campus.length ? (
        <>
          <h1>{campus.name}</h1>
          <img src={campus.imageUrl} />
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <Link to={`/campuses/${campus.id}`}>
            <button>Edit Campus</button>
          </Link>
        </>
      ) : (
        <h1>No campus</h1>
      )}
    </div>
  );
};

export default SingleCampus;
