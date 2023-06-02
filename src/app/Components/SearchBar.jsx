import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar..." className={styles.input} />
      <button className={styles.button}>Buscar</button>
    </div>
  );
};

export default SearchBar;
