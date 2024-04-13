import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Navbar = ({ setShowCart, showCart, cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand text-danger" href="/">PHLOX</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/shop'} className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to={'/blog'} className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to={'/contact'} className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to={'/addproduct'} className="nav-link ptn-addProduct">
                <i className="fa fa-plus"></i> Add Product
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to={'/login'}>Login</Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center navbar-expand-lg nav">
          <li className="nav-item cartIcon">
            <a href="#" className="nav-link" onClick={() => setShowCart(!showCart)}>
              <i className="fa fa-shopping-cart"></i>
              <span className="cartCount">
  {cartItems && cartItems.length > 0 ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0}
</span>

            </a>
          </li>

            <li className="nav-item m-2">
              <a href="#"><i className="fa fa-magnifying-glass" style={{color:'black'}}></i></a>
            </li>
            
            <li>
              <Link to={'/register'} className="nav-link CreatAccount">
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Create Account</span>
                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setShowCart: PropTypes.func.isRequired, 
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired 
};

export default Navbar;
