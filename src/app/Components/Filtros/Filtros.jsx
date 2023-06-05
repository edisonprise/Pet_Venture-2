import React, { useState, useEffect } from "react";
import styles from "./Filtros.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getSubCategories,
  getFilteredProducts,
  getProducts,
  dynamicSearchName,
  setFilteredProducts,
} from "../../../../redux/actions";

const Filtros = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);

  let brands = useSelector((state) => state.brands);
  let categories = useSelector((state) => state.categories);
  let subCategories = useSelector((state) => state.subCategories);

  const [filterPanel, setFilterPanel] = useState({
    name: "",
    brand: "none",
    category: "none",
    subCategory: "none",
    price: "none",
  });
  useEffect(() => {
    dispatch(getProducts());
    const filterBrands = () => {
      console.log("allProducts.length", allProducts.length);
      const brandsArr = allProducts.map((b) => b.brand);
      const uniqueBrands = [...new Set(brandsArr)];
      // console.log("uniqueBrands", uniqueBrands);
      return uniqueBrands;
    };

    const filterCategory = () => {
      const categoryArr = allProducts.map((b) => b.category);
      const uniqueCategory = [...new Set(categoryArr)];
      // console.log("uniqueCategory", uniqueCategory);
      return uniqueCategory;
    };

    const filterSubCategory = () => {
      const subCategoryArr = allProducts.map((b) => b.subCategory);
      const uniqueSubCategory = [...new Set(subCategoryArr)];
      return uniqueSubCategory;
    };
    dispatch(getBrands(filterBrands()));
    dispatch(getSubCategories(filterSubCategory()));
    dispatch(getCategories(filterCategory()));
  }, [allProducts.length]);

  useEffect(() => {
    let productsCopy = [...allProducts];
    // console.log("productsCopy", productsCopy);

    if (productsCopy.length > 0) {
      let j = 0;
      console.log("brands", brands);

      for (let i = 0; i < productsCopy.length; i++) {
        if (productsCopy[i].hasOwnProperty("category")) {
          j++;
        }
      }
      // console.log("jota", j);
      if (filterPanel.name !== "") {
        productsCopy = productsCopy.filter((p) =>
          p.name?.includes(filterPanel.name)
        );
      }

      if (filterPanel.brand !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.brand?.includes(filterPanel.brand)
        );
      }

      if (filterPanel.category !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.category?.includes(filterPanel.category)
        );
      }

      if (filterPanel.subCategory !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.subCategory?.includes(filterPanel.subCategory)
        );
      }

      if (filterPanel.price !== "none") {
        if (filterPanel.price === "higher") {
          console.log("filterPanel.price", productsCopy[0]);
          productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        } else {
          productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        }
      }

      dispatch(setFilteredProducts(productsCopy));
    }
  }, [filterPanel]);

  // console.log("filterMachine", filterMachine);

  // console.log("filterPanel", filterPanel);

  const handleChange = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
    // dispatch(getFilteredProducts(filterPanel));
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, name: e.target.value };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.selectContainer}>
          <div className={styles.searchContainer}>
            <input
              name="name"
              value={filterPanel.name}
              className={styles.input}
              onChange={handleChange}
              placeholder="Search..."
            ></input>
            <button
              name="name"
              value={filterPanel.name}
              type="submit"
              className={styles.button}
              onClick={handleNameClick}
            >
              Search Name
            </button>{" "}
          </div>

          <label htmlFor="" className={styles.label}>
            Brand
          </label>

          <select
            id="brand"
            name="brand"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            <option value={"none"}>Filter by Brand</option>
            {/* {console.log("filtros", brands)} */}
            {brands?.map((b, i) => (
              <option key={i} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          <label htmlFor="" className={styles.label}>
            Category
          </label>
          <select
            id="category"
            name="category"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            <option value={"none"}>Filter by Category</option>
            {/* {console.log("filtros", brands)} */}
            {categories?.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          <label htmlFor="" className={styles.label}>
            SubCategory
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            <option value={"none"}>Filter by SubCategory</option>
            {/* {console.log("filtros", brands)} */}
            {subCategories?.map((sc, i) => (
              <option key={i} value={sc}>
                {sc}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="" className={styles.label}>
            Price
          </label>
          <select
            id="price"
            name="price"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            <option key="none" value="none">
              None
            </option>
            <option key="higher" value="higher">
              Higher
            </option>
            <option key="lower" value="lower">
              Lower
            </option>
          </select>
        </div>

        <button className={styles.deleteFilter}>
          {/* <span className={styles.shadow}></span> */}
          <span className={styles.edge}></span>
          <span className={styles.front}>Borrar Filtros</span>
        </button>
      </div>
    </div>
  );
};

export default Filtros;
