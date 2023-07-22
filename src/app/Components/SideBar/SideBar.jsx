import "./SideBar.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"

const Sidebar = ({onClose, isOpen,}) =>{
    const {cart, total, onRemoveItem} = useContext(CartContext)
    return(
        <div className="sideBar"
        style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)"
        }}>
            <div className="close-button-container">
            <FaWindowClose onClick={onClose} className="close-Button" />
            </div>
            {cart.length === 0 ? (<p className="empty-cart>">Tu carrito esta vacio</p>)
            : (
                cart.map((item) => (
                    <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                )
                )
            )}
            <h2>Total: </h2>
            <h3>${total}</h3>

            <Link to={`/cart`} ><button>Ir al Carrito</button></Link>
        </div>
    )


}

export default Sidebar