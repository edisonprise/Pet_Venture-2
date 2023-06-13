import { useSelector } from "react-redux";


export default function Compras(){

    const misCompras = useSelector((state) => state.compras);

    return(
        <div>
            <div>Tus Compras Hasta El Momento</div>
        </div>
    )
}; 