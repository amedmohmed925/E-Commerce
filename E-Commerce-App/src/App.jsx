
import './App.css'
import SectionThree from './components/SectionThree'
import './index.css'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'
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
