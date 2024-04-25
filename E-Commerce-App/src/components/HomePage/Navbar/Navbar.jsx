import PropTypes from 'prop-types'; 
import React, {  useEffect, useState } from 'react';
import { NavLink, Link ,useNavigate} from 'react-router-dom';
import openModal from "../../../store/current.jsx";
import { useContext } from 'react';
import axios from 'axios';

const Navbar = ({ setShowCart, showCart, cartItems }) => {

    const { curUser } = useContext(openModal);
    const [ name, setName ] = useState("");
    // console.log(curToken);
    const navigate = useNavigate();
    useEffect(() => {
      const getUser = async () => {
        try {
          const response = await axios.get(
            `https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/users/${curUser.id}`,
          );
          console.log(response);
          if (response.data.status === "success") {
            setName(response.data.result.firstName + " " + response.data.result.lastName)
          }
        } catch (error) {
          console.error('Error registering user:', error.message);
        }
      }
      getUser();
    }, [curUser]);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pb-14">
      <div className="container">
        <a className="navbar-brand text-danger" href="/">PHLOX</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/shop'} className="nav-link">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/categories'} className="nav-link">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/blog'} className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/contact'} className="nav-link">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <Link to={'/addproduct'} className="nav-link ptn-addProduct">
                <i className="fa fa-plus"></i> Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/addCategory'} className="nav-link ">
                <i className="fa fa-plus"></i> Add Category
              </Link>
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
            
            {!curUser &&
              <li>
                <Link to={'/login'} className="nav-link CreatAccount" href="#">
                  <button className="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span className="text">Login</span>
                    <span className="circle"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </li>
            }{!curUser &&
              <li>
                <Link to={'/register'} className="nav-link CreatAccount" href="#">
                  <button className="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span className="text">Creat Account</span>
                    <span className="circle"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </li>
            }
            {curUser && <Link to={"/Portoflio"} style={{color:"red"}}>Hi {name}</Link>}
          
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
