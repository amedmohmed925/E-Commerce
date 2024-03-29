import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item m-2">
        <a href="#"><i className="fa-solid fa-magnifying-glass" style={{color:'black'}}></i></a>
        </li>
        <li className="nav-item m-2">
       <a href="#" ><i className="fa-solid fa-bag-shopping" style={{color:'black'}} /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
