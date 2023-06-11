import { useState, useEffect } from "react"
import axios from "axios";
import styles from "./mercadoPago.button.module.css"
import { Loader } from "../Loader/Loader";


const MercadoPagoButton = ({ product }) => {
    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true)
            try {
                const { data: preference } = await axios.post("/api/checkout", {
                    product
                });

                setUrl(preference.url);
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };

        generateLink();
    }, [product]);
    return (
        <div>
            {loading ? (
                <button className={styles.button} disabled>
                    <Loader />
                </button>
            ) : (
                <a className={styles.button} href={url}>
                    Comprar ahora
                </a>
            )}
        </div>
    )
}

export default MercadoPagoButton