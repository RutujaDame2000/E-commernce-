

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setCurrentProduct from '../actions/setCurrentProduct';
import { addToCart } from './cartSlice';

function IconList({ product }) {
  const dispatch = useDispatch();

  const handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
      {/* 🔍 View Details */}
      <Link onClick={handleCurrentProduct} to="/details/">
        <li className="icon">
          <span className="fas fa-expand-arrows-alt"></span>
        </li>
      </Link>

      {/* ❤️ Wishlist (future feature) */}
      <li className="icon mx-3" onClick={() => alert('Wishlist Page')}>
        <span className="far fa-heart"></span>
      </li>

      {/* 🛒 Add to Cart */}
      <li className="icon" onClick={handleAddToCart}>
        <span className="fas fa-shopping-bag"></span>
      </li>
    </ul>
  );
}

export default IconList;
