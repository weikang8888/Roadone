import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import NewDetails_19AUG21 from "./pages/New/NewDetails/NewDetails_19AUG21";
import NewDetails_17MAY21 from "./pages/New/NewDetails/NewDetails_17MAY21";
import NewDetails_03FEB21 from "./pages/New/NewDetails/NewDetails_03FEB21";
import NewDetails_20JAN21 from "./pages/New/NewDetails/NewDetails_20JAN21";
import NewDetails_11JAN21 from "./pages/New/NewDetails/NewDetails_11JAN21";
import NewDetails_30DEC20 from "./pages/New/NewDetails/NewDetails_30DEC20";
import NewDetails_30NOV20 from "./pages/New/NewDetails/NewDetails_30NOV20";
import NewDetails_10NOV20 from "./pages/New/NewDetails/NewDetails_10NOV20";
import NewDetails_01SEP20 from "./pages/New/NewDetails/NewDetails_01SEP20_2";
import NewDetails_01SEP20_2 from "./pages/New/NewDetails/NewDetails_01SEP20_2";

function App() {
  const newDetailsRoutes = [
    { path: "385-65r22-5-new-pattern-hf281", component: NewDetails_19AUG21 },
    {
      path: "roadone-12-00r20-new-truck-tire-road-test",
      component: NewDetails_17MAY21,
    },
    { path: "295-80r22-5-hf21-truck-tire-test", component: NewDetails_03FEB21 },
    {
      path: "xcmg-feedback-award-to-tongli-tire-co-ltd",
      component: NewDetails_20JAN21,
    },
    {
      path: "hixih-continental-cooperation",
      component: NewDetails_11JAN21,
    },
    {
      path: "hixih-steel-wire-rope-co-ltd",
      component: NewDetails_30DEC20,
    },
    {
      path: "hd520-pattern-road-test",
      component: NewDetails_30NOV20,
    },
    {
      path: "14-00r20-special-off-road-tyres",
      component: NewDetails_10NOV20,
    },
    {
      path: "roadone-becomes-good-supplier-of-the-china-famous-truck-company",
      component: NewDetails_01SEP20,
    },
    {
      path: "roadone-m665a-heavy-duty-13r22.5-test",
      component: NewDetails_01SEP20_2,
    },
  ].map(({ path, component }) => (
    <Route
      key={path}
      path={`/news/${path}`}
      element={React.createElement(component)}
    />
  ));
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
          <Route path="/news/companyupdate" element={<CompanyUpdate />} />s{" "}
          {newDetailsRoutes}
          <Route path="/services" element={<Servicepage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <SubContact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
