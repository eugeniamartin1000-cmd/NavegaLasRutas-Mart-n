import '../assets/css/CartWidget.css'

const CartWidget = () => {
    console.log('CartWidget')
    return (
        <div>
            <img src="/public/icon-cart.svg" alt="Carrito de compras" className="cart-icon"/>
            <span className="counter-badge"> 10 </span>
        </div>
    )
};
export default CartWidget;