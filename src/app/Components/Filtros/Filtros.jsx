import React from "react";
import styles from "./Filtros.module.css";

const Filtros = () => {
  return (
    <div className={styles.container}>
         <div className={styles.container}>
            <div className={styles.selectContainer}>
                <label htmlFor="" className={styles.label}>Ordenamiento</label>
                <select id='sort' name="Sort" className={styles.select} >
                    <option value='sort' className={styles.option}>Ordenamiento</option>
                    <option value='asc' className={styles.option} >Nombre (A-Z)</option>
                    <option value='desc' className={styles.option}>Nombre (Z-A)</option>
                </select>
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor="" className={styles.label}>Poblacion</label>
                <select id="population" name="Population" className={styles.select} >
                    <option value='population' className={styles.option}>Poblacion</option>
                    <option value='high' className={styles.option}>Mas alta (↑)</option>
                    <option value='low' className={styles.option}>Mas bajo (↓)</option>
                </select>
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor="" className={styles.label}>Continentes</label>
                <select id="continents" name="Continents" className={styles.select} >
                    <option value='all' className={styles.option}>Todos</option>
                    <option value='Africa' className={styles.option}>Africa</option>
                    <option value='Antarctica' className={styles.option}>Antarctica</option>
                    <option value='Asia' className={styles.option}>Asia</option>
                    <option value='Europe' className={styles.option}>Europe</option>
                    <option value='North America' className={styles.option}>North America</option>
                    <option value='Oceania' className={styles.option}>Oceania</option>
                    <option value='South America' className={styles.option}>South America</option>
                </select>
            </div>
            {/* {<div className={styles.selectContainer}>
                <label htmlFor="" className={styles.label}>Actividades</label>
                <select name="Activity" className={styles.select}>
                    <option value='activities' className={styles.option}>Actividades</option>
                    {activities?.map((e, i) => (
                <option key={i} value={e.name}>
                    {e.name}
                </option>
                ))}
                </select>
            </div> } */}
            <button className={styles.deleteFilter}>
                <span className={styles.shadow}></span>
                <span className={styles.edge}></span>
                <span className={styles.front}>Borrar Filtros</span>
            </button>
        </div>
    </div>
  );
};

export default Filtros; 