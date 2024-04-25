import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import AboutPage from './components/AboutPage/About';
import BlogPage from './components/BlogPage/Blog';
import ContactPage from './components/ContactPage/Contact';
import RegisterForm from './components/RegisterPage/Register';
import Login from './components/LoginPage/Login';
import PageFound from './components/pageFound';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Categories from './components/Categories/Categories';
import EditCategories from './components/Categories/EditCategories';
import Deletecategories from './components/Categories/DeleteCategories';
import Portoflio  from './components/Portoflio/Portoflio.jsx';
import { ModalProvider } from '../src/store/current.jsx';
import AddCategory from './components/Categories/AddCategory.jsx';
function App() {
  return (
    <ModalProvider>
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
          <Route path='/categories' element={<Categories />} />
          <Route path='/addCategory' element={<AddCategory />} />
          <Route path='/editCat/:id' element={<EditCategories />} />
          <Route path='/deleteCat/:id' element={<Deletecategories />} />
          <Route path='/Portoflio' element={<Portoflio/>}/>

          <Route path='*' element={<PageFound />} />
        </Routes>
    </Router>

    </ModalProvider>
      )
}

export default App;
