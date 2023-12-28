import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Home from "../Components/Home";
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRouter;
