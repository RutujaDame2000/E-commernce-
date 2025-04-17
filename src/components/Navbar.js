

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 🔥 To access Redux state
import './Navbar.css'; // Your custom styles
import { FaShoppingCart } from 'react-icons/fa'; // Bag icon

function Navbar() {
  // 🛒 Access cart state, with a fallback to an empty array if cart is undefined
  const cartItems = useSelector((state) => state.cart) || [];
  
  const cartCount = cartItems.length;

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg"
              alt="Logo"
              width="80"
              height="60"
              className="me-2"
            />
            <span className="brand-name">StyleKart</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/living">Living</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/beauty">Beauty</Link></li>
            </ul>

            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            {/* 🛍 Cart Icon with badge */}
            <Link to="/cart" className="position-relative text-dark">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.7rem' }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

