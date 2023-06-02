import style from "./Landing.module.css"
import Link from "next/link"

export default function Landing() {
  return(
    <div className={style.container}>
        <div>
            <div className={style.texto}>
                <h1 className={style.titulo}>Bienvenido a Pet Venture</h1>
                <p className={style.descripcion}>Tu sitio de adopcion y compra de productos</p>
                <Link href="/">
                <button className={style.button}>Más información</button>
            </Link>
            <video autoPlay loop muted className={style.video}>
            <source src="/assets/prueba.mp4" type="video/mp4" />
            </video>
            </div>
        </div>
    </div>
)
}; 