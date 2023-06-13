import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import styles from "./Ofertas2.module.css";

import Card from "../Card/Card";

export default function Ofertas2(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Mas Comprados</h2>
      <div className={styles.ofertasGrid}>
        {props.products.slice(0,6).map((p, i) => (
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
    </div>
  );
}
