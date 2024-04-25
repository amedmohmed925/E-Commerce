import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Categories.css'
import Navbar from '../HomePage/Navbar/Navbar';

import Footer from '../HomePage/Footer/Footer-2';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/categories');
        console.log('All categories:', response.data.data);
        setCategories(response.data.data);
        setError('');
      } catch (error) {
        console.error('Error fetching categories:', error.message);
        setError('Failed to fetch categories.');
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
     <div>
        <Navbar />
      {categories.length === 0 && !error && <p>Loading categories...</p>}
      {error && <div className='main mainCat' style={{ color: 'red' }}>{error}</div>}
      <ul className='mainCardsCategories'>
        <div className="titleCat">

             <h2>All Categories</h2>
        </div>
        <div className="mainCards">

        {categories.map((category) => (
          <div className='cardCategories' key={category.id}>
            <img className='imgCategories' src={category.catImage} alt="" />  
            <h2>{category.name}</h2>
            <div className='ptns '>
                <Link to={`/editCat/${category.id}`}>
                    <button className='edit-ptn btn btn-primary m-2'>Edit</button>
                </Link> 

                <Link to={`/deleteCat/${category.id}`}>
             
                 <button className='delete-ptn btn btn-danger m-2'>Delete</button>
                </Link>   
                    
            </div>
          </div>
        ))}
        </div>
      </ul>
      <Footer />
    </div>
    </>
   
  );
};

export default Categories;
