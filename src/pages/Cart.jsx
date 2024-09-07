// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { removeItem, clearCart } from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            ))}
            <button className="clear-cart-button" onClick={handleClear}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
