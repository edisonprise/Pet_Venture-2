import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

function Card(props) {
  // console.log(props.id);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {" "}
        <img className={styles.img} src={props.image} alt="Not found" />
        <div className={styles.productInfo}>
          <div>
            <h5 className={styles.title}> {props.name}</h5>{" "}
          </div>
          <div>
            <h5 className={styles.title}>Marca: {props.brand} </h5>{" "}
          </div>
          <div>
            <h5 className={styles.title}>Precio: $ {props.price}</h5>{" "}
          </div>
          <Link className={styles.detail} href={`/detail/${props.id}`}>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
