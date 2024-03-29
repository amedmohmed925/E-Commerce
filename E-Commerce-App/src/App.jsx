
import './App.css'
import HomePage from './components/HomePage/HomePage'
import ShopPage from './components/ShopPage/ShopPage';
import AboutPage from './components/AboutPage/About';
import BlogPage from'./components/BlogPage/Blog'
import ContactPage from './components/ContactPage/Contact'
import './index.css'
import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/shop' element={ <ShopPage />}/>
        <Route path='/about' element={ <AboutPage />}/>
        <Route path='/blog' element={ <BlogPage />}/>
        <Route path='/contact' element={ <ContactPage />}/>

      </Routes>
     
    </Router>
  )
}

export default App
