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

const handlerDelete = (id) => {
  const existingProductIndex = carrito.findIndex((product) => product.id === id);

  if (existingProductIndex !== -1) {
    const existingProduct = carrito[existingProductIndex];

    if (existingProduct.quantity > 1) {
      // Si la cantidad existente es mayor a 1, restar 1 a la cantidad del producto
      dispatch(decreaseQuantity(id, 1));
    } else {
      // Si la cantidad existente es 1 o menos, eliminar el producto del carrito
      dispatch(deleteCarrito(id));
    }
  }

    if (existingProduct.quantity > 1) {
      // If the existing quantity is greater than 1, prompt for the quantity to delete
      Swal.fire({
        title: "Borrar producto del carrito",
        input: "number",
        inputAttributes: {
          min: 1,
          max: existingProduct.quantity,
          step: 1,
        },
        inputValue: existingProduct.quantity,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
          if (value < 1 || value > existingProduct.quantity) {
            return "Ingresa una cantidad válida";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const quantityToDelete = parseInt(result.value, 10);
          dispatch(decreaseQuantity(id, quantityToDelete));
          Swal.fire(
            "Producto borrado del carrito",
            `Se ha eliminado ${quantityToDelete} unidad(es) del producto`,
            "success"
          );
        }
      });
    } else {
      // If the existing quantity is 1 or less, delete the product from the cart
      dispatch(deleteCarrito(id));
      Swal.fire(
        "Producto borrado del carrito",
        "Se ha eliminado el producto del carrito",
        "success"
      );
    }
  };

  let totalPrice = 0;

  const groupedCarrito = carrito.reduce((accumulator, currentProduct) => {
    const existingProductIndex = accumulator.findIndex(
      (p) => p.id === currentProduct.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, increase the quantity
      const existingProduct = accumulator[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      accumulator.splice(existingProductIndex, 1, updatedProduct);
    } else {
      // If the product doesn't exist, add it to the accumulator with quantity 1
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
              onClick={() => handlerDelete(e.id)}
            >
              <p>Borrar del Carrito</p>
            </button>
          </div>
        );
      })}
      <div className={styles.precios}>
        {carrito.forEach((product) => {
          totalPrice += product.price * product.quantity; // Multiply the price by the quantity
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
}
