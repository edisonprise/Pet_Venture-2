import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";

import Ofertas from "../Ofertas/Ofertas";
import Ofertas2 from "../Ofertas2/Ofertas2";
import Footer from "../Footer/Footer";

const Home = () => {
 

  return (
    <div>
      <Navbar/>
      <Slider/>
      <Ofertas/>
      <Ofertas2/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
