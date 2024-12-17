import React from "react";
import Student from "../Students/Student";
import Navbar from "../Navbar";
import StaffData from "../Staff/StaffData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div
          className="bg-dark text-white"
          style={{ width: "250px", minHeight: "100vh" }}
        >
          <Navbar />
        </div>
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/staff" element={<StaffData />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Body;
