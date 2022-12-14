import React from "react";
import { createRoot } from "react-dom/client";
import { App, Navbar } from "./components/index.js";
import { Student, Campus, db } from '../server/database/index.js'

import store from './store/index.js'
/* Import and destructure main from src/component/index.js 
and anything else you may need here */


// ! TODO SWITCH OUT FAKE DATA WITH REAL DATA

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <Navbar />
    <App />
  </>
);

// {/* <Main
// students={[Student.findAll()]}
// campuses={Campus.findAll()}
// /> */}
