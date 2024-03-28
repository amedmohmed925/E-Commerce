
import './App.css'
import SectionThree from './components/page1/SectionThree/SectionThree'
import './index.css'
import SectionTwo from './components/page1/SectionTwo/SectionTwo'
import SectionFour from './components/page1/SectionFour/SectionFour'
import Footer from './components/page1/Footer/Footer'
import Home from './components/page1/Home/Home'
import Navbar from './components/page1/Navbar/Navbar'

function App() {

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

export default App
