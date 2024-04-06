import React from 'react'

function pageFound() {
  return (
    <div className=' vh-100  d-flex flex-column justify-center align-items-center bg-dark bg-gradient'>
      <h1 className='m-auto text-center pt-5 font-sans fw-bold fs-1 text-2xl	text-danger'>Page Not Found 404</h1>
      <img className='w-50 h-2/4 ' src="/images/found 404.png" alt="" />
    </div>
  )
}

export default pageFound
