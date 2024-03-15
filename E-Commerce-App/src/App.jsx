
import './App.css'
import SectionThree from './components/SectionThree/SectionThree'
import './index.css'
import SectionFour from './components/SectionFour/SectionFour'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
        <Home></Home>
        <SectionThree />
        <SectionFour />
        <Footer/>

    </div>
  )
}

export default App
