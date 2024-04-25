import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar/Navbar';

import Footer from '../HomePage/Footer/Footer-2';
const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    catImage: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const response = await axios.post('https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/categories', formData);
      console.log('New category added:', response.data);
      setSuccessMessage('New category added successfully!');
      setError('');

      setFormData({ name: '', catImage : '' });
    } catch (error) {
      console.error('Error adding new category:', error.message);
      setError('Failed to add new category.');
      setSuccessMessage('');
    }
  };

  return (
    <>
    <Navbar />
    <div className='AddCategory addProduct mainSection'>
      <h2 >Add New Category</h2>
      <form className='EditData dataCategory'  onSubmit={handleSubmit}>
        
          <input
          className='inputEdit'
          placeholder='Enter Name Category'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        
          <input
          className='inputEdit'
          placeholder='Enter URL image'

            type="text"
            id="catImage"
            name="catImage"
            value={formData.catImage}
            onChange={handleChange}
            required
          />
        
        <button className='ptnSave ptnadd' type="submit">Add Category</button>
      </form>
      {error && <div className='success' style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div className='success' style={{ color: 'green' }}>{successMessage}</div>}
    </div>
      <Footer />
    </>
        
  );
};

export default AddCategory;
