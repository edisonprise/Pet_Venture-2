"use client";
import axios from "axios";
import React from "react";
import Link from "next/link";
import styles from "./detail.module.css";
 

function productDetail({ product }) {
  return (
    <div>

      <div className={styles.container}>
        <img className={styles.img} src={product[0].image} alt="Not found" />
        <div className={styles.infoContainer}>
          <div className={styles.propertyContainer}>
            <h4>Name: </h4> <div>{product[0].name} </div>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Brand: </h4>
            <span> {product[0].brand}</span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Category: </h4>
            <span> {product[0].category}</span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Descripcion: </h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Price: </h4>
            <span> {product[0].price} </span>
          </div>{" "}
          <Link href="/" className={styles.deleteFilter}>
            Volver a Home
          </Link> 
          <Link href="/tienda" className={styles.deleteFilter}>
            Volver a la tienda
          </Link>
        </div>{" "}
      </div>
      <div>
        
        <p></p>
      </div>
    </div>
  );
}

export default productDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(
    `http://localhost:3000/api/productsById?id=${id}`
  );
  const product = response.data;

  return {
    props: {
      product,
    },
  };
}
