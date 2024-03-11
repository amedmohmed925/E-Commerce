import React from 'react';
import CardsSectionThree from './CardsSectionThree';

const SectionThree = () => {
    return (
        <div className='mainSectionThree'>
            <div className="pannar text-bg-danger p-5  ">
                <div className="textOne ">
                    <span className='fs-6'>20% OFF</span>
                    <h1 className='display-2 fw-bold '>FINE <br /> SMILE</h1>
                    <span className='fs-6'>15 New To 7 Dec</span>
                </div>

                <img className='w-50 p-3 d-none d-sm-block img-fluid img-headPhone' src="/images/headPhone1.png" alt="headPhone" />

                <div className="textTwo ">
                    <span className='fs-6'>Beats Solo Air</span>
                    <h1 className='display-5 fw-bold'>Summer Sale</h1>
                    <p className='fs-6'>Company that’s grown from 270 to 480 employees <br /> in the last 12 months.</p>
                    <button className='btn btn-light rounded-pill px-4'>Shop</button>
                </div>
            </div>

            <div className="cards py-5 d-flex flex-column justify-content-center">
                <h1 className='mx-auto fw-bold'>Best Seller Products</h1>
                <p className='mx-auto '>There are many variations passages</p>
                <CardsSectionThree />
            </div>
        </div>
    );
}

export default SectionThree;