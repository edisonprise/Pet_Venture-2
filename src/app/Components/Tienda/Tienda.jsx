import React, { useEffect } from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  getCategories,
  getProducts,
  getSubCategories,
} from "../../../../redux/actions";

const Tienda = () => {
  let products = useSelector((state) => state.products);
  let brands = useSelector((state) => state.brands);
  let categories = useSelector((state) => state.categories);
  let subCategories = useSelector((state) => state.subCategories);

  const dispatch = useDispatch();

  // const filterBrands = () => {
  //   const brandsArr = products.map((b) => b.brand);
  //   const uniqueBrands = [...new Set(brandsArr)];
  //   // console.log("uniqueBrands", uniqueBrands);
  //   return uniqueBrands;
  // };

  // const filterCategory = () => {
  //   const categoryArr = products.map((b) => b.category);
  //   const uniqueCategory = [...new Set(categoryArr)];
  //   // console.log("uniqueCategory", uniqueCategory);
  //   return uniqueCategory;
  // };

  // const filterSubCategory = () => {
  //   const subCategoryArr = products.map((b) => b.subCategory);
  //   const uniqueSubCategory = [...new Set(subCategoryArr)];
  //   return uniqueSubCategory;
  // };

  // useEffect(() => {
  //   // dispatch(getBrands(filterBrands()));
  //   // dispatch(getSubCategories(filterSubCategory()));
  //   // dispatch(getCategories(filterCategory()));
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <Filtros />
      <Products />
    </div>
  );
};

export default Tienda;
