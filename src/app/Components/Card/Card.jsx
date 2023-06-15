import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import { addCarrito, deleteCarrito } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

function Card(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addCarrito(productId));
<<<<<<< HEAD
    alert("se añadio producto");
  };

  return (
    <div className={styles.container}>
      <div className={styles.carrito}>
        <button
=======
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  };



  
  return (
    <div className={styles.container}>
      <div className={styles.carrito}>
      <button
>>>>>>> 4c7cd9cc0d8b648ecd2918620c1deb56fe262b1e
          className={styles.deleteFilter}
          onClick={() => handleAddToCart(props.id)}
        >
          {/* {console.log(props.id)} */}
<<<<<<< HEAD
          <p className={styles.button}>Añadir al Carrito</p>
=======
          <p >Añadir al Carrito</p>
>>>>>>> 4c7cd9cc0d8b648ecd2918620c1deb56fe262b1e
        </button>
      </div>
      <div className={styles.card}>
        <img className={styles.img} src={props.image} alt="Not found" />
        <div className={styles.productInfo}>
          <div>
            <h5 className={styles.title}>{props.name}</h5>
          </div>
          <div>
            <h5 className={styles.title}>Marca: {props.brand}</h5>
          </div>
          <div>
            <Link href={`/detail/${props.id}`}>
              Detalle
            </Link>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Card;
