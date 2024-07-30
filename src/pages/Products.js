import React from 'react';
import ProductList from '../Components/ProductList';
import products from '../Data/Product';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
