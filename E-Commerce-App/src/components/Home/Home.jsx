import React from 'react'



export default function Home() {
  return (
    <>
      <div className='mainSectionTwo' style={{ position: 'relative', backgroundColor: '#eee', borderRadius: '15px', margin: '30px', display: 'flex', height: '80vh', gap: '5px', paddingLeft: '2.5%' }}>

        <div className="textOne" style={{ marginTop: '130px', position: 'relative', display: 'flex', flexDirection: 'column', padding: '4px', height: '100%' }} >
          <span className='display-2' style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>Beats Solo</span>
          <h1 className='display-2 fw-bold mb-4' style={{ marginBottom: '4%' }}>Wireless</h1>
          <h1 className='headphone mt-5'>Headphone</h1>
          <button className='btn btn-danger' style={{ borderRadius: '20px', marginTop: '20vh', maxWidth: '100%' }}>Shop By Category</button>
        </div>
        <img className='' style={{ maxWidth:'41vw',zIndex: '1', marginRight: '9vw' }} src="/images/headphone.png" alt="headPhone" />

        <div className="textTwo" style={{ position: 'absolute', right: '5%', bottom: '10%', width: '20%' }}>
          <span className='text' style={{ fontWeight: 'bolder', position: 'absolute', right: '11%', bottom: '100%' }}>Description</span>
          <p className='fs-6'>There are many variations passages of Lorem ipsum dolor, sit amet consectetur adipisicing<br /> in the last 12 months.</p>
        </div>
      </div>


    </>
  )
}
