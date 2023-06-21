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
import Newpage from "./pages/New/Newpage";
import Productpage from "./pages/Product/Productpage";
import Servicepage from "./pages/Service/Servicepage";
import Contactpage from "./pages/Contact/Contactpage";
import NewProducts from "./pages/New/NewProducts";
import TradeFair from "./pages/New/TradeFair";
import TyreTest from "./pages/New/TyreTest";
import CompanyUpdate from "./pages/New/CompanyUpdate";
import SubContact from "./component/SubMenu/SubContact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/news" element={<Newpage />} />
          <Route path="/news/newproducts" element={<NewProducts />} />
          <Route path="/news/tradefair" element={<TradeFair />} />
          <Route path="/news/tyretest" element={<TyreTest />} />
          <Route path="/news/companyupdate" element={<CompanyUpdate />} />

          <Route path="/services" element={<Servicepage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <SubContact/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
