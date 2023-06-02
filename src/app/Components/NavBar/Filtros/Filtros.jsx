import { dynamicSearchName } from "../../../../../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styles from "./filtros.module.css";
import { getProducts } from "../../../../../redux/actions";

export default function FilterOptions() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("allProducts", allProducts);
  return (
    <div>
      <div> </div>
    </div>
  );
}
