import React from 'react';
import './ProductDetail.css';
import Image from '../assets/img/samosa.jpg'

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={Image} alt={product.name} />
      <h2>Samosa</h2>
      <p>{product.price}Rupees</p>
      <p>Jumbo Samosa</p>
    </div>
  );
}

export default ProductDetail;
