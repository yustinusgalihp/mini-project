import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addCart = (product, id) => {
    const newData = { ...product, amount: 1 };
    const cartItem = cart.find((data) => {
      return data.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((data) => {
        if (data.id === id) {
          return { ...data, amount: cartItem.amount + 1 };
        } else {
          return data;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newData]);
    }
  };

  const removeCart = (id) => {
    const newCart = cart.filter((data) => {
      return data.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((data) => data.id === id);
    addCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((data) => {
      return data.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((data) => {
        if (data.id === id) {
          return { ...data, amount: cartItem.amount - 1 };
        } else {
          return data;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
