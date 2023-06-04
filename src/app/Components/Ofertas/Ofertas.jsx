import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../../../redux/actions'
import styles from './ofertas.module.css'

import Card from "../Card/Card";

export default function Ofertas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);


  return (
    
    <div className={styles.productos}>
         Ofertas del Dia
      {
               
    allProducts.slice(0,6).map(({image,name}) => (
      <Card
        image={image}
        name ={name}

                     
                   />
                   ))
           }
    </div>
  );
}