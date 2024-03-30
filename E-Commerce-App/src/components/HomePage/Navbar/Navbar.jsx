import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand text-danger" href="#">PHLOX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/shop'} className="nav-link" href="#">shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link" href="#">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/blog'} className="nav-link" href="#">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-link" href="#">Contact us</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0 align-items-center navbar-expand-lg nav">
      <li className="nav-item">
          <Link to={'/login'} className="nav-link" href="#">Login</Link>
        </li>
        <li className="nav-item m-2">
        <a href="#"><i className="fa-solid fa-magnifying-glass" style={{color:'black'}}></i></a>
        </li>
        <li className="nav-item m-2">
       <a href="#" ><i className="fa-solid fa-bag-shopping" style={{color:'black'}} /></a>
        </li>
        <li>
          <Link to={'/register'} className="nav-link CreatAccount"  href="#">
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
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
