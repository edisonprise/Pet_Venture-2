"use client";
import axios from "axios";
import React, { useEffect } from "react";

import styles from "./detail.module.css";

function productDetail({ product }) {
  console.log("prod", product);

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.img} src={product[0].image} alt="Not found" />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h2>Name</h2> {product[0].name}
        </div>

        <div>
          <h2>Brand</h2>
          <span> {product[0].brand}</span>
        </div>

        <div>
          <h2>Category</h2>
          {product[0].category}
        </div>

        <div>
          <h2>Descripcion</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>

        <div>
          <h2>Description</h2> <h2>Price</h2>
          {product[0].price}
        </div>
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
