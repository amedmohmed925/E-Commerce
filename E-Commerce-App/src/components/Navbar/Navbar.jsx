import React from 'react'

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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item m-2">
        <a href="#"><i class="fa-solid fa-magnifying-glass" style={{color:'black'}}></i></a>
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
