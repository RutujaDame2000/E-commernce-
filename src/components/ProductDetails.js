

import React from 'react';
import './details.css';

const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleBuyNow = () => {
    alert('Proceeding to checkout...');
    // You can implement checkout flow here
  };

  return (
    <section id="product-info">
      {/* Images Section */}
      <div className="item-image-parent">
        <div className="item-list-vertical">
          {/* Thumbnail images */}
          <div className="thumb-box">
            <img src={product.image} alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
          </div>
        </div>
        <div className="item-image-main">
          <img src={product.image} alt="default" />
        </div>
      </div>

      {/* Info Section */}
      <div className="item-info-parent">
        <div className="main-info">
          <h4>{product.title}</h4>
          <div className="star-rating">
            <span>★★★★</span>★
          </div>
          <p>Price: <span id="price">{product.price}</span></p>
        </div>

        <div className="select-items">
          <div className="change-color">
            <label><b>Colour:</b> Black</label><br />
            <div className="thumb-box">
              <img src="https://i.ibb.co/QjkJJk3/select1.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/C297yD0/select2.jpg" alt="thumbnail" />
            </div>
          </div>

          <div className="change-size">
            <label><b>Size:</b></label><br />
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>2XL</option>
            </select>
          </div>

          <div className="description">
            <p>{product.description}</p>
            <ul>
              <li>Care Instructions: Machine Wash</li>
              <li>Fit Type: Classic Fit</li>
              <li>Color name: Black-White</li>
              <li>Material: Cotton</li>
              <li>Pattern: Solid</li>
            </ul>
          </div>
        </div>

        {/* Inline Buttons */}
        <div className="action-buttons">
          <button className="buy-btn" onClick={handleBuyNow}>Buy</button>
          <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
