import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./component/Header/Header";
import "./static/css/style.css";
import "./static/css/animate.min.css";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./component/Footer/Footer";
import Aboutpage from "./pages/About/Aboutpage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
