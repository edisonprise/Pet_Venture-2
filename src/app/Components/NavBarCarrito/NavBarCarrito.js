import React from "react";
import { useSelector } from "react-redux";


export default function NavBarCarrito(props) {
  const carrito = useSelector((state) => state.carrito);
 
  console.log(carrito)
  
  return (
    <div >
      
      
    </div>
  );
}; 

