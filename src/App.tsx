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
import NewDetails20180820 from "./pages/New/NewDetails/NewDetails20180820";
import NewDetails20180622 from "./pages/New/NewDetails/NewDetails20180622";
import NewDetails20170306 from "./pages/New/NewDetails/NewDetails20170306";
import NewDetails20170110 from "./pages/New/NewDetails/NewDetails20170110";
import TyreFunction from "./pages/Service/ServiceDetails/TyreFunction";
import TyreMarketing from "./pages/Service/ServiceDetails/TyreMarketing";
import TyreSpecification from "./pages/Service/ServiceDetails/TyreSpecification";
import TyreStorage from "./pages/Service/ServiceDetails/TyreStorage";
import ProductRoute from "./routes/ProductRoutes";

const App = () => {
  const renderedProductRoutes = ProductRoute.map(({ path, component }) => (
    <Route
      key={path}
      path={`${path}`}
      element={React.createElement(component)}
    />
  ));
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
        <Route path="/news/2018/0820_713" element={<NewDetails20180820 />} />
        <Route path="/news/2018/0622_712" element={<NewDetails20180622 />} />
        <Route path="/news/2017/0306_711" element={<NewDetails20170306 />} />
        <Route path="/news/2017/0110_710" element={<NewDetails20170110 />} />

        <Route path="/services/tyre-class" element={<ServiceTyreClass />} />
        <Route
          path="/services/tyre-class/tyre-function-and-structure"
          element={<TyreFunction />}
        />
        <Route
          path="/services/tyre-class/tyre-marketing"
          element={<TyreMarketing />}
        />
        <Route
          path="/services/tyre-class/tyre-specification"
          element={<TyreSpecification />}
        />
        <Route
          path="/services/tyre-class/tyre-storage"
          element={<TyreStorage />}
        />

        <Route path="/services/guestbook" element={<ServiceForm />} />
        <Route path="/services/download" element={<ServiceDownload />} />
        <Route
          path="/products/:category?/:subcategory?"
          element={<Productpage />}
        />
        {renderedProductRoutes}

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
