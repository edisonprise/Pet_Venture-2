import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteCarrito } from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import MercadoPagoButton from "../mercadoPagoButton/mercadoPagoButton";

export default function NavBarCarrito(props) {
  const carrito = useSelector((state) => state.carrito);

  const dispatch = useDispatch();
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLocalStorage) {
      dispatch({ type: "SET_CARRITO", payload: cartFromLocalStorage });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const handlerDelete = (id) => {
    dispatch(deleteCarrito(id));
    let timerInterval
Swal.fire({
  title: 'Sacando producto del carrito',
  html: 'Espere <b></b> milisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
  };

  let totalPrice = 0;

  return (
    
    <div className={styles.container}>
      <div className={styles.backtotienda}>
        <Link href="/tienda">
          <p className={styles.deleteFilter}>Volver a la tienda</p>
        </Link>
      </div>

      {carrito.map((e) => {
        return (
          <div className={styles.cartCard} key={e?.id}>
            <div className={styles.cartCardInfo}>
              <div>Name: {e?.name}</div>
              <div>
                Categoria: {e?.category}
                <br />
                SubCategoria: {e?.subCategory}
                <br />
                Marca: {e?.brand}
                <br />
                Precio: {e?.price}
              </div>
              {e?.image && (
                <img
                  className={styles.cartCardImage}
                  src={e?.image}
                  alt="Not found"
                />
              )}
            </div>
            <button
              className={styles.cartCardButton}
              onClick={() => handlerDelete(e?.id)}
            >
              <p>Borrar del Carrito</p>
            </button>
          </div>
        );
      })}
       
      {carrito.forEach((e) => {
        totalPrice += e?.price;
        // console.log(totalPrice)
      })}
      <div className={styles.precios}>
        Precio Total: {totalPrice}$
        <MercadoPagoButton carrito={carrito} />
      </div>
    </div>
  );
}
