import React from "react";
import { createRoot } from "react-dom/client";
import { Main, Navbar } from "./components/index.js";

// import { Student, Campus, db } from '../server/database/index.js'

/* Import and destructure main from src/component/index.js 
and anything else you may need here */

const fake_students = [
  {
    id: 2,
    firstName: "Jose",
    lastName: "Do",
    email: "email2@email.com",
    gpa: 3.0,
  },
  {
    id: 3,
    firstName: "Jose",
    lastName: "Do",
    email: "email2@email.com",
    gpa: 3.0,
  },
  {
    id: 4,
    firstName: "Jose",
    lastName: "Do",
    email: "email2@email.com",
    gpa: 3.0,
  },
  {
    id: 5,
    firstName: "Jose",
    lastName: "Do",
    email: "email2@email.com",
    gpa: 3.0,
  },
];

const fake_campuses = [
  {
    id: 2,
    name: "Fullstack",
    address: "1234 Main St",
    description: "THE SCHOOL",
  },
  {
    id: 3,
    name: "Grace Hopper",
    address: "432 Avenue Park St",
    description: "A school",
  },
  {
    id: 4,
    name: "Hack Reactor",
    address: "1234 Main St",
    description: "THE SCHOOL",
  },
];

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <Navbar />
    <Main students={fake_students} campuses={fake_campuses} />
  </>
);

// {/* <Main
// students={[Student.findAll()]}
// campuses={Campus.findAll()}
// /> */}
