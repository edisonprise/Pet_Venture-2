import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarrito } from "../../../../redux/actions";


export default function NavBarCarrito() {

  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch(); 

  useEffect(() => { 
    dispatch(addCarrito(id));
  }, [dispatch, id])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {carrito.map((e) => (

        <div key={e.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <div style={{ fontWeight: "bold" }}>{e.name}</div>
          <div>Prueba: {e.products}</div>
          <div>Name: {e.name}</div>
          {e.category && (
            <div>
              Category: {e.category}
              <br />
              SubCategory: {e.subCategory}
              <br />
              Brand: {e.brand}
              <br />
              Precio: {e.price}
              <br />
              {e.image && <img src={e.image} alt="Not found" />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}; 
