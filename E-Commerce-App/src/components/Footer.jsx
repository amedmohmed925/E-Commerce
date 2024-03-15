import React from 'react'
import Footer2 from './Footer-2'
function Footer() {
  return (
    <div className='main-footer w-100'>
        <div className="main-prands">
            <div className="prands mx-auto d-flex justify-content-around align-items-center h-100 flex-wrap gap-5">
                <img src="/images/prand1.jpeg" alt="prand1" />
                <img src="/images/prand2.jpeg" alt="prand2" />
                <img src="/images/prand3.jpeg" alt="prand3" />
                <img src="/images/prand4.jpeg" alt="prand4" />
                <img src="/images/prand5.jpeg" alt="prand5" />
            </div>
        </div>
        <Footer2 />
    </div>
  )
}

export default Footer