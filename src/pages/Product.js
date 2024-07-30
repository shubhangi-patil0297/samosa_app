import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/ProductDetail';
import products from '../Data/Product';
import './Product.css';

function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product">
      <ProductDetail product={product} />
    </div>
  );
}

export default Product;
