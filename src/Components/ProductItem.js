import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';
import Image from '../assets/img/samosa.jpg'

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={ Image } alt={product.name} />
      <h3>Samosa</h3>
      <p>{product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductItem;
