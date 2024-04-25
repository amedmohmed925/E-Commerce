
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer-2';
import { useParams } from 'react-router-dom';

const EditCategories = () => {
  const { id } = useParams();
  const [Categories, setCategories] = useState({
    name: '',
    catImage : ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.patch(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/categories/${id}`,{withCredentials:true});
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategories({
      ...Categories,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/categories/${id}`, Categories,{withCredentials:true});
      console.log('categories updated:', response.data);
      if (response.ok) {
        console.log("scsess")
    }
      resetData()
      setSuccessMessage('The categories has been successfully updated.');

    } catch (error) {
      console.error('Error updating categories:', error);
    }
   
  };
  const resetData = () => {
    setCategories({
      name: '',
      catImage: '' 
    });
  }

  return (
    <div>
            <Navbar />
            <div className='mainSection EditCat mt-7'>
                <h2>Edit Category</h2>
                <form className='EditData' onSubmit={handleSubmit}>
                   
                    <input className='inputEdit' placeholder='Name Category' type="text" id="name" name="name" value={Categories.name} onChange={handleInputChange} />
                   
                    <input className='inputEdit' placeholder='URL Image' type="text" id="catImage" name="catImage" value={Categories.catImage} onChange={handleInputChange} />
                   
                        <button className='ptnSave ptnCategoryEdit' type="submit">Save Chenges</button>
                        {successMessage && <div className='success'  style={{ color: 'green', marginLeft: '165px'}}>{successMessage}</div>}
                   
                </form>
            </div>
            <Footer />
        </div>
  );
};

export default EditCategories;
