import './App.css'
import HomePage from './components/HomePage/HomePage'
import ShopPage from './components/ShopPage/ShopPage';
import AboutPage from './components/AboutPage/About';
import BlogPage from'./components/BlogPage/Blog'
import ContactPage from './components/ContactPage/Contact'
import RegisterForm from './components/RegisterPage/Register';
import Login from './components/LoginPage/Login'
import PageFound from './components/pageFound'
import AddProduct from './components/AddProduct/AddProduct';
import './index.css'
import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import EditProduct from './components/EditProduct/EditProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/delete/:id' element={<DeleteProduct />} />
        <Route path='/SingleProducts/:id' element={<SingleProduct />} />
        <Route path='*' element={<PageFound />} />
      </Routes>
    </Router>
  )
}

export default App
