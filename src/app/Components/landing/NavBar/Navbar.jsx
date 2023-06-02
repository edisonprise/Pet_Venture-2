import React from "react";
import Link from "next/link";
import PetVenture from "../../../../../public/img/logoventure.png";
import SearchBar from "../../SearchBar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
      <img src={PetVenture.src} width="300px" height="100px" alt="Logo" />
      </div>
      <SearchBar />
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <Link href="/">Nosotros</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link href="/adopta">Adopta</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/login">Ingresa/Registrate</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
