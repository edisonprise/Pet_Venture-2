import React from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";
import Products from '../Products/Products'

const Tienda = () => {
  return (
    <div className={styles.container}>
        <Filtros/>
        <Products/>
    </div>
   
  );
};

export default Tienda; 