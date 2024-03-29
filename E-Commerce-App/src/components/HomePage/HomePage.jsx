import React from 'react'
import SectionThree from './SectionThree/SectionThree'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionFour from './SectionFour/SectionFour'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
const HomePage = () => {
  return (
    <div>
       <Navbar></Navbar>
        <Home></Home>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer/>
    </div>
  )
}

export default HomePage
