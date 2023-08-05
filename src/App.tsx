import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./static/css/style.css";
import Homepage from "./pages/Homepage/Homepage";
import Newpage from "./pages/New/Newpage";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
