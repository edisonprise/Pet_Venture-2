import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../../../redux/actions";
import Card from "../Card/Card";
import styles from "./Products.module.css";
import { Loader } from "../Loader/Loader";

export default function Products(props) {
  //& Manejo de error por falta de resultados
  if (props.itemsToShow.length === 0)
    return (
      <div className={styles.container}>
        {" "}
        <h1 className={styles.notFound}>
          <Loader></Loader>
        </h1>
      </div>
    );

  return (
    <div className={styles.productos}>
      {props.itemsToShow.map((p, i) => (
        <Card
          key={i}
          image={p.image}
          name={p.name}
          category={p.category}
          subCategory={p.subCategory}
          brand_URL={p.brand_URL}
          image_URL={p.image_URL}
          price={p.price}
          brand={p.brand}
          id={p.id}
        />
      ))}
    </div>
  );
}
