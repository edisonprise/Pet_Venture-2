import React from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";

const Tienda = () => {
  return (
    <div className={styles.container}>
        <Filtros/>
    </div>
  );
};

export default Tienda; 