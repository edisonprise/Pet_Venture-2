import React from "react";
import styles from "./Paginate.module.css";

export default function Paginate({ productsPerPage, allProducts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.length <= 1 ? (
        <></>
      ) : (
        <nav className={styles.pagination}>
          <ul className={styles.page}>
            {pageNumbers?.map((p) => (
              <li className={styles.page} key={p}>
                <button className={styles.pageBtn} onClick={() => paginate(p)}>
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
