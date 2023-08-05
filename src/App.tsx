import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import "./static/css/style.css";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <>
      <Router>
        <Homepage />
      </Router>
    </>
  );
};
export default App;
