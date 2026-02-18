import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const calcItemsQty = () => {
    return cart.reduce((acc, item) => acc + item.qty, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, calcItemsQty }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext