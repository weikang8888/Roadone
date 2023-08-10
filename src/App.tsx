import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./static/css/bootstrap.min.css";
import "./static/css/style.css";
import "./static/css/responsive.css";
import Homepage from "./pages/Homepage/Homepage";
import Newpage from "./pages/New/Newpage";
import Footer from "./component/Footer/Footer";
import Recruitment from "./pages/Recruitment/Recruitment";
import SocialRecruitment from "./pages/Recruitment/SocialRecruitment";
import CampusRecruitment from "./pages/Recruitment/CampusRecruitment";
import ServiceTyreClass from "./pages/Service/ServiceTyreClass";
import ServiceForm from "./pages/Service/ServiceForm";
import ServiceDownload from "./pages/Service/ServiceDownload";
import AboutRoadone from "./pages/About/AboutRoadone";
import SocialResponsibility from "./pages/About/SocialResponsibility";
import ContactUs from "./pages/About/ContactUs";
import FooterMobile from "./component/Footer/FooterMobile";
import Productpage from "./pages/Product/Productpage";

const App = () => {
  const [showFooterMobile, setShowFooterMobile] = useState(false);

  const handleWindowResize = () => {
    setShowFooterMobile(window.innerWidth <= 990);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Initial check for window width
    handleWindowResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/news" element={<Newpage />} />
        <Route path="/services/tyre-class" element={<ServiceTyreClass />} />
        <Route path="/services/guestbook" element={<ServiceForm />} />
        <Route path="/services/download" element={<ServiceDownload />} />
        
        <Route path="/products" element={<Productpage />} />

        <Route path="/recruitment" element={<Recruitment />} />
        <Route
          path="/recruitment/social"
          element={<SocialRecruitment showHeader={true} />}
        />
        <Route
          path="/recruitment/campus"
          element={<CampusRecruitment showHeader={true} />}
        />
        <Route path="/about/roadone" element={<AboutRoadone />} />
        <Route
          path="/about/social-responsibility"
          element={<SocialResponsibility />}
        />
        <Route path="/about/contact" element={<ContactUs />} />
      </Routes>
      {showFooterMobile ? <FooterMobile /> : <Footer />}
    </Router>
  );
};

export default App;
