import { useState } from 'react'
import '../assets/css/ItemCount.css'

const ItemCount = ({stock, onAdd}) => {

const [count, setCount] = useState(1);

const sumItems = () => {
    if (count < stock) {
        setCount (count + 1)
    }
};

const substractItems = () => {
    if (count >0) {
        setCount (count - 1);
    }
};

const addToCart = () => {
    onAdd (count);
}

return (
    <div className='item-container'>
        <div className="item-count">
            <button className="btn-substact" onClick={substractItems} disabled={count === 0} >-</button>
            <span className="counter">{count}</span>
            <button className="btn-add" onClick={sumItems} disabled={count === stock}> + </button>
        </div>
        <button className="btn-primary" onClick={addToCart} disabled={count === 0 || count === stock }>Añadir al Carrito</button>
    </div>
)
};

export default ItemCount;