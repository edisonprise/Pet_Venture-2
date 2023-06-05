import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import styles from "./ofertas.module.css";

import Card from "../Card/Card";

export default function Ofertas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);

  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Ofertas del Día</h2>
      <div className={styles.ofertasGrid}>
        {allProducts.slice(0, 13).map(({ image, name }) => (
          <Card key={name} image={image} name={name} />
        ))}
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://www.hipermania.com.ar/imgs/mcat/mcat-banner-perros.png?v=8"
          alt="Imagen"
          className={styles.offerImage}
        />
        <img
          src="https://www.nestle.com.ar/sites/g/files/pydnoa481/files/Banner%20Dog%20Chow.jpg"
          alt="Imagen"
          className={styles.offerImage}
        />
      </div>
    </div>
  );
}
