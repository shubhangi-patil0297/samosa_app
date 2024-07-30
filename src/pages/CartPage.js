import React from 'react';
import Cart from '../Components/Cart';
import './CartPage.css';

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;
