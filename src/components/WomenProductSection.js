import React from 'react';
import ProductItem from './ProductItem';

const WomenProductSection = ({ products = [] }) => {
  return (
    <div className="container bg-white">
      <div className="row mt-5">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomenProductSection;
