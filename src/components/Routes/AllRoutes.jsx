import React from "react";
import {  Route, Routes } from "react-router-dom";

import CreateNote from "../CreateNote";
import HomePage from "../HomePage";
import EditNote from "../EditNote";
import Signin from "../AuthForms/Signin";
import Login from "../AuthForms/Login";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateNote />}></Route>
        <Route path="/edit/:id" element={<EditNote />}></Route>
        <Route path="/delete/:id" element={<CreateNote />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
  );
};

export default AllRoutes;
