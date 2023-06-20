import React from "react";
import Header from "./component/Header/Header";
import "./static/css/style.css";
import "./static/css/animate.min.css";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
