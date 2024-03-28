import React from 'react'

function Footer() {
  return (
    <div className='main-footer-2 d-flex justify-content-around flex-wrap p-5 gap-5'>
      <div className="one">
        <h2 className='text-danger '>PHLOX</h2>
        <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Blanditiis similique voluptatem labore, placeat amet commodi <br />
        temporibus veniam voluptates obcaecati</p>
        <div className="icons ">
            <a className='px-3 text-black' href="#"><i className="fab fa-facebook-f"></i></a>
            <a className='px-3 text-black' href="#"><i className="fab fa-twitter"></i></a>
            <a className='px-3 text-black' href="#"><i className="fab fa-instagram"></i></a>
            <a className='px-3 text-black' href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="two">
        <h2 className='fs-4 py-2'>Quick Linkes</h2>
        <ul className='p-0'>
            <li className='list-group-item'><a  className='text-black fw-bold' href="#">Home</a></li>
            <li className='list-group-item'><a className='text-black fw-bold' href="#">About</a></li>
            <li className='list-group-item'><a className='text-black fw-bold' href="#">Shop</a></li>
            <li className='list-group-item'><a className='text-black fw-bold' href="#">Contact</a></li>
        </ul>
      </div>

      <div className="three">
        <h2 className='fs-4 py-2 p '>Contact</h2>
        <p className='fs-6'>+20 (2) abc 000 mod franc <br /> Address: Egypt - Qena <br /> Crzpene Nashmde TX 70051</p>
        
      </div>

      <div className="four">
        <h2 className='fs-4 py-2'>Subscibe To Our Email</h2>
        <h1 className='fs-2 '>For Lastet News & Updates</h1>
        <form className='position-relative' action="">
          <input className=' w-100 p-3 rounded-pill border border-0 input-footer' type="email" placeholder="Enter Your Email" />
          <button className='position-absolute top-0 bottom-0 py-1 end-0 m-2 rounded-pill border border-0 bg-danger text-light' type="submit">Subscribe</button>
        </form>
      </div>

    </div>
  )
}

export default Footer
