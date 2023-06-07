import React, { useEffect, useState } from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";
import { getProducts } from "../../../../redux/actions";
import Pagination from "../Pagination/Pagination";

const Tienda = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState(" ");
  const allProducts = useSelector((state) => state.filteredProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const itemsToShow = allProducts?.slice(startIndex, endIndex);

  // const paginate = (pageNumber) => {
  //   setItemsPerPage(pageNumber);
  // };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.container}>
      <Filtros />
      <Products itemsToShow={itemsToShow} />
      <Pagination
        currentPage={currentPage} //%
        setCurrentPage={setCurrentPage} //& trate funcion del componente pagination con el numero actual
        totalPages={totalPages} //& le manda las pages a Pagination
        // paginate={paginate}
      />
    </div>
  );
};

export default Tienda;
