
import './App.css'
import SectionThree from './components/sectionThree'
import './index.css'
import Combonet from './components/SectionFour'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
        
        <Navbar></Navbar>
        <Home></Home>
        <SectionThree />
        <Combonet />
    </div>
  )
}

export default App
