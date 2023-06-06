import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";

import Ofertas from "../Ofertas/Ofertas";
import Ofertas2 from "../Ofertas2/Ofertas2";
import Footer from "../Footer/Footer";

import { useDispatch } from "react-redux";
import { getProducts } from "../../../../redux/actions";

import styles from "./Home.module.css"

import {
  getBrands,
  getCategories,
  getSubCategories,
} from "../../../../redux/actions";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Navbar />
      <Slider />
      <Ofertas />
      <Ofertas2 />
      <Footer />
    </div>
  );
}
