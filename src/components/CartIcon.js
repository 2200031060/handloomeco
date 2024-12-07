import React from 'react';
import { useCart } from '../context/CartContext';
import cartIcon from '../assets/cart.png'; // Cart icon image

const CartIcon = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems ? cartItems.length : 0;

  return (
    <div className="cart-icon">
      <img src={cartIcon} alt="Cart" />
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
