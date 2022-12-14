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
        <a href="/home">Home</a>
        <a href="/campuses">Campuses</a>
        <a href="/students">Students</a>
        <a href="/api">API</a>
      </div>
      {/* <div addACampus> */}
    </div>
  );
};

export default Navbar;
