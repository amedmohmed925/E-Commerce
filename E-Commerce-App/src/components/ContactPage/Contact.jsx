import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Footer/Footer'
import Icons from './Icons'
import Card from './Card'
import Feedback from './Feedback'
import './Contact.css'
function Contact() {
  return (
    <>
     <Navbar></Navbar>
    <div className='m-auto container'>
      
      <h1 className='titleContact'>PHLOX Contact US Page</h1>
      <Icons/>
      <Card/>
      <div className=' feedbackImg'>

      <Feedback/>
      <img
      className='imagePlace'
       src=
'https://media.geeksforgeeks.org/wp-content/uploads/20230821104522/gfg-(5).jpg'
           />
      </div>

    </div>
      <Footer></Footer>
    </>
     
  )
}

export default Contact
