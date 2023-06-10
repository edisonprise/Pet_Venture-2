import { useState, useEffect } from "react"
import axios from "axios";


const MercadoPagoButton = ({ product }) => {
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const generateLink = async () => {

            try {
                const { data: preference } = await axios.post("/api/checkout", {
                    product
                });

                setUrl(preference.url);
            } catch (error) {
                console.error(error);
            }

        };

        generateLink();
    }, [product]);
    return (
        <div>
            <a href={url}>
                Comprar ahora
            </a>
        </div>
    )
}

export default MercadoPagoButton