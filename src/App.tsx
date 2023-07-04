import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WOW from "wowjs";
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
import NewDetailsRoutes from "./routes/NewDetailsRoutes";
import ServiceDetailsRoutes from "./routes/ServiceDetailsRoutes";
import ProductDetailsRoutes from "./routes/ProductDetailsRoutes";
import ServiceCompanyNews from "./pages/Service/ServiceCompanyNews";

class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    const renderedNewDetailsRoutes = NewDetailsRoutes.map(
      ({ path, component }) => (
        <Route
          key={path}
          path={`/news/${path}`}
          element={React.createElement(component)}
        />
      )
    );

    const renderedServiceDetailsRoutes = ServiceDetailsRoutes.map(
      ({ path, component }) => (
        <Route
          key={path}
          path={`/services/${path}`}
          element={React.createElement(component)}
        />
      )
    );

    const renderedProductsDetailsRoutes = ProductDetailsRoutes.map(
      ({ path, component }) => (
        <Route
          key={path}
          path={`/products/${path}`}
          element={React.createElement(component)}
        />
      )
    );

    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/products" element={<Productpage />} />
            {renderedProductsDetailsRoutes}
            <Route path="/news" element={<Newpage />} />
            <Route path="/news/newproducts" element={<NewProducts />} />
            <Route path="/news/tradefair" element={<TradeFair />} />
            <Route path="/news/tyretest" element={<TyreTest />} />
            <Route path="/news/companyupdate" element={<CompanyUpdate />} />
            {renderedNewDetailsRoutes}
            <Route path="/services" element={<Servicepage />} />
            <Route
              path="/services/companynews"
              element={<ServiceCompanyNews />}
            />
            {renderedServiceDetailsRoutes}
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
          <SubContact />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
