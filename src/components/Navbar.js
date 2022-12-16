import React from "react";
/*
    This is you entry point for your routes
*/
//write a basic navbar component
const Navbar = () => {
  return (
    <div id="navbar">
      <h1 className="navbarTitle">JPFP</h1>
      <div className="directories">
        <a href="/">Home</a>
        <a href="/campuses">Campuses</a>
        <a href="/campuses/add">Edit Campuses</a>
        <a href="/students">Students</a>
        <a href="/students/add">Edit Students</a>
      </div>
    </div>
  );
};

export default Navbar;
