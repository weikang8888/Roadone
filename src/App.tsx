import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./static/css/style.css";
import "./static/css/bootstrap.min.css";
import Homepage from "./pages/Homepage/Homepage";
import Newpage from "./pages/New/Newpage";
import Footer from "./component/Footer/Footer";
import Servicepage from "./pages/Service/Servicepage";
import Recruitment from "./pages/Recruitment/Recruitment";
import SocialRecruitment from "./pages/Recruitment/SocialRecruitment";
import CampusRecruitment from "./pages/Recruitment/CampusRecruitment";
import ServiceTyreClass from "./pages/Service/ServiceTyreClass";
import ServiceForm from "./pages/Service/ServiceForm";
import ServiceDownload from "./pages/Service/ServiceDownload";
import Aboutpage from "./pages/About/Aboutpage";
import AboutRoadone from "./pages/About/AboutRoadone";
import SocialResponsibility from "./pages/About/SocialResponsibility";
import ContactUs from "./pages/About/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Newpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route
          path="/services/tyre-class"
          element={<ServiceTyreClass showHeader={true} showMenu={true} />}
        />
        <Route path="/services/guestbook" element={<ServiceForm />} />
        <Route path="/services/download" element={<ServiceDownload />} />

        <Route path="/recruitment" element={<Recruitment />} />
        <Route
          path="/recruitment/social"
          element={<SocialRecruitment showHeader={true} />}
        />
        <Route
          path="/recruitment/campus"
          element={<CampusRecruitment showHeader={true} />}
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/about/roadone" element={<AboutRoadone />} />
        <Route
          path="/about/social-responsibility"
          element={<SocialResponsibility />}
        />
        <Route path="/about/contact" element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
