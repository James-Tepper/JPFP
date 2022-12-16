import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../features/singleCampusSlice.js";
import { fetchCampusesAsync } from "../features/campusesSlice.js";

const AddCampus = () => {
  const dispatch = useDispatch();
  

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCampusAsync({ name, address, description, imageUrl }));
    setName("");
    setAddress("");
    setDescription("");
    setImageUrl("");
  };

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  return (
    <div id="addStudent">
      <h3>Add Campus</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Campus Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
        imageUrl:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <label>
        <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
};

export default AddCampus;
