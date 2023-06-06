import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import styles from "./ofertas2.module.css";

import Card from "../Card/Card";

export default function Ofertas2() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);

  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Mas Comprados</h2>
      <div className={styles.ofertasGrid}>
        {allProducts.slice(15, 25).map(({ image, name }, i) => (
          <Card key={i} image={image} name={name} />
        ))}
      </div>
    </div>
  );
}
