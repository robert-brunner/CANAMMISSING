import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { HomePage } from "../homePage/HomePage";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
};
