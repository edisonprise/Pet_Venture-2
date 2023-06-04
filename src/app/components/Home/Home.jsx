import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";

import Ofertas from "../Ofertas/Ofertas";

const Home = () => {
 

  return (
    <div>
      <Navbar/>
      <Slider/>
      <Ofertas/>
      
    </div>
  );
};

export default Home;
