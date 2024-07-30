import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Headers';
import Footer from './Components/Footer';
import Home from './pages/Homes';
import Products from './pages/Products';
import Product from './pages/Product';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<Product addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
