

import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import ProductDetails from '../components/ProductDetails'; 

let Details = () => {
  let product = useSelector((state) => state.currentProduct.product);

  return (
    <>
      <div className='container-fluid'>
        <Navbar />
      </div>

      <div className='container'>
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Details;
