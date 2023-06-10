import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteCarrito } from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import  { useEffect } from "react";


export default function NavBarCarrito(props) {
  const carrito = useSelector((state) => state.carrito) 

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
    alert("Producto borrado");
  };

  let totalPrice = 0;

  return (
    <div>
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
                <img className={styles.cartCardImage} src={e?.image} alt="Not found" />
              )}
            </div>
            <button className={styles.cartCardButton} onClick={() => handlerDelete(e?.id)}>
              <p>Borrar del Carrito</p>
            </button>
          </div>
        );
      })}

      {carrito.forEach((e) => {
        totalPrice  +=  e?.price
        // console.log(totalPrice)
      })}
      <div className={styles.precios}>Precio Total: {totalPrice}$</div>

    </div>
  );
}
