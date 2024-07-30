import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

function Header() {
  return (
    <header className="header">
      <h1>Samosa Corner</h1>
      <nav>
        <Link to="/">Homes</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
