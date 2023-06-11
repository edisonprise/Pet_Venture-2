import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { addCarrito, deleteCarrito } from "../../../../redux/actions"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

function Card(props) {

  const dispatch = useDispatch()
 
  const handleAddToCart = (productId) => {
    dispatch(addCarrito(productId));
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
     
       
              
          <button onClick={() => handleAddToCart(props.id)}
          className={styles.button}>Agregar al carrito</button>
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
            <h5 className={styles.title}>Precio: $ {props.price}</h5>
          </div>
          <div className={styles.buttonContainer}>
            <Link href={`/detail/${props.id}`}>
              <p className={styles.button}>Detalle</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
