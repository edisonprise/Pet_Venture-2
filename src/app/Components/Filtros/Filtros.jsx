import React, { useState, useEffect } from "react";
import styles from "./Filtros.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getSubCategories,
  getProducts,
  setFilteredProducts,
} from "../../../../redux/actions";
import Link from "next/link";

const Filtros = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);

  const [brandSelect, setBrandSelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [subCategorySelect, setSubCategorySelect] = useState("");

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
    const filterBrands = () => {
      const brandsArr = allProducts.map((b) => b.brand);
      const uniqueBrands = [...new Set(brandsArr)];
      return uniqueBrands;
    };

    const filterCategory = () => {
      const categoryArr = allProducts.map((b) => b.category);
      const uniqueCategory = [...new Set(categoryArr)];
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

    if (productsCopy.length > 0) {
      let j = 0;

      for (let i = 0; i < productsCopy.length; i++) {
        if (productsCopy[i].hasOwnProperty("category")) {
          j++;
        }
      }

      if (filterPanel.name !== "") {
        productsCopy = productsCopy.filter((p) =>
          p.name?.toLowerCase().includes(filterPanel.name.toLowerCase())
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
          productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        } else {
          productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        }
      }

      dispatch(setFilteredProducts(productsCopy));
    }
  }, [filterPanel]);

  const handleChange = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, name: e.target.value };
    });
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    setFilterPanel({
      name: "",
      brand: "none",
      category: "none",
      subCategory: "none",
      price: "none",
    });
    setBrandSelect("");
    setCategorySelect("");
    setSubCategorySelect("");
  };

  const handleClick = () => {
    setShowSidebar(true);
  };

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div className={styles.container}>
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
            className={styles.searchButton}
            onClick={handleNameClick}
          >
            Search Name
          </button>{" "}
        </div>
        <div className={styles.selectContainer}>
          <select
            id="brand"
            name="brand"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={brandSelect}
          >
            <option value={"none"}>Filter by Brand</option>

            {brands?.map((b, i) => (
              <option key={i} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          <select
            id="category"
            name="category"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={categorySelect}
          >
            {" "}
            <option value={"none"} defaultValue={"Filter by Category"}>
              Filter by Category
            </option>
            {categories?.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          <select
            id="subCategory"
            name="subCategory"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={subCategorySelect}
          >
            <option value={"none"}>Filter by SubCategory</option>

            {subCategories?.map((sc, i) => (
              <option key={i} value={sc}>
                {sc}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectContainer}>
          <select
            id="price"
            name="price"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            <option key="none" value="none">
              Price
            </option>
            <option key="higher" value="higher">
              Higher
            </option>
            <option key="lower" value="lower">
              Lower
            </option>
          </select>
        </div>

        <button className={styles.deleteFilter} onClick={handleResetClick}>
          <span className={styles.front}>Resetear Filtros</span>
        </button>
        <Link href="/" className={styles.deleteFilter}>
          Volver a Home
        </Link>
      </div>
      <div>
        <Link href="/carrito">
          <img src="img/carrito.png" className={styles.buttonimg} />
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default Filtros;
