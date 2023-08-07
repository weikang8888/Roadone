import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./static/css/style.css";
import Homepage from "./pages/Homepage/Homepage";
import Newpage from "./pages/New/Newpage";
import Footer from "./component/Footer/Footer";
import Servicepage from "./pages/Service/Servicepage";
import { ServiceProvider } from "./provider/ServiceContent";

const App = () => {
  return (
    <Router>
      <ServiceProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newpage />} />
          <Route path="/services/*" element={<Servicepage />} />
        </Routes>
      </ServiceProvider>
      <Footer />
    </Router>
  );
};

export default App;
