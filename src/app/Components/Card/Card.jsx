import React from 'react';
import styles from './Card.module.css';

function Card({ categoria, id, image, price, name }) {
  return (
    <div className={styles.container}>
        <img className={styles.img} src={image} alt="Not found" />
      <div className={styles.card}>

        <div className={styles.contenedorcard}>
          <h3 className={styles.namedog}>{name}</h3>
        </div>

        <div className={styles.namedescription}>
          <h2>{price}</h2>
          <h5>{id}</h5>
          <h3>{categoria}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
