import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCarrito, decreaseQuantity } from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";
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

  

 
const handlerDelete = (id, quantityToDelete) => {
  dispatch(deleteCarrito(id, quantityToDelete));
  
  Swal.fire(
    "Producto borrado del carrito",
    "Se ha eliminado el producto del carrito",
    "success"
  );
}

  let totalPrice = 0;

  const groupedCarrito = carrito.reduce((accumulator, currentProduct) => {
    const existingProductIndex = accumulator.findIndex(
      (p) => p.id === currentProduct.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, incrementar la cantidad
      const existingProduct = accumulator[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      accumulator.splice(existingProductIndex, 1, updatedProduct);
    } else {
      // Si el producto no existe, agregarlo al acumulador con cantidad 1
      accumulator.push({ ...currentProduct, quantity: 1 });
    }

    return accumulator;
  }, []);

  const isCarritoEmpty = groupedCarrito.length === 0;

  return (
    <div className={styles.container}>
      {groupedCarrito.map((e) => {
        return (
          <div className={styles.cartCard} key={e.id}>
            <div className={styles.cartCardInfo}>
              {e.image && (
                <img
                  className={styles.cartCardImage}
                  src={e.image}
                  alt="Not found"
                />
              )}
              <div>Name: {e.name}</div>
              <div>
                Categoria: {e.category}
                <br />
                SubCategoria: {e.subCategory}
                <br />
                Marca: {e.brand}
                <br />
                Precio: {e.price}
                <br />
                Cantidad: {e.quantity}
              </div>
            </div>
            <button
              className={styles.cartCardButton}
              onClick={() => handlerDelete(e?.id, e?.quantity)}
            >
              <p>Borrar del Carrito</p>
            </button>
          </div>
        );
      })}
      <div className={styles.precios}>
        {carrito.forEach((product) => {
          totalPrice += product.price;
        })}
        Precio Total: {totalPrice}$
        {isCarritoEmpty ? (
          <>
            <p>El carrito está vacío</p>
            <Link href="/tienda">
              <p className={styles.deleteFilter}>Volver a la tienda</p>
            </Link>
          </>
        ) : (
          <>
            <MercadoPagoButton carrito={carrito} />
            <Link href="/tienda">
              <p className={styles.deleteFilter}>Volver a la tienda</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );

};

