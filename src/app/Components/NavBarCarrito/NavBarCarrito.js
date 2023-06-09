import React from "react";
import { useSelector } from "react-redux";

export default function NavBarCarrito() {
  const carrito = useSelector((state) => state.carrito);
 console.log(carrito)
  return (
    <div >
      {carrito.map((e) => (
        <div key={e?.id} >
          
          <div>Name: {e?.name}</div>
          <div>
            Category: {e?.category}
            <br />
            SubCategory: {e?.subCategory}
            <br />
            Brand: {e?.brand}
            <br />
            Precio: {e?.price}
            <br />
            {e?.image && <img src={e?.image} alt="Not found" />}
          </div>
        </div>
      ))}
    </div>
  );
}
