import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import Card from "../Card/Card";
import styles from "./Products.module.css";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // const allProducts = useSelector((state) => state.products);
  const allProducts = useSelector((state) => state.filteredProducts);

  return (
    <div className={styles.productos}>
      {allProducts.map(({ image, name }, i) => (
        <Card key={i} image={image} name={name} />
      ))}
    </div>
  );
}
