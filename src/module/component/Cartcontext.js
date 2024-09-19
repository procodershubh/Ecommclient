// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();


export const useCart = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity = (updatedCart[existingProductIndex].quantity || 1) + 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product._id !== productId));

  };
  const updateQuantity = (productId, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: action === 'increment'
                ? (item.quantity || 1) + 1
                : Math.max((item.quantity || 1) - 1, 1),
            }
          : item
      )
    );
  };
    // Clear the entire cart
    const clearCart = () => {
      setCart([]);
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity,removeFromCart ,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
