import React from "react";
/*
    This is you entry point for your routes
*/
//write a basic navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>JPFP</h1>
      <div className="directories">
        <a href="/home">Home</a>
        <a href="/campuses">Campuses</a>
        <a href="/students">Students</a>
      </div>
    </div>
  );
};

export default Navbar;
