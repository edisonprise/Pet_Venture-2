import React from "react";
import Link from "next/link";
import PetVenture from "../../../../public/img/PetVenture.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={PetVenture.src} width="300px" height="100px" alt="Logo" />
      </div>

      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>

          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/formulario">Crear Producto</Link>
          </li>
          <li>
            <Link href="/adopta">Adopta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
