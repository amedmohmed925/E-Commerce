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
    <div className=''>
      <h2 className=' py-10'>Add New Category</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="catImage">Category Image URL:</label>
          <input
            type="text"
            id="catImage"
            name="catImage"
            value={formData.catImage}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <Footer />
    </div>
    </>
        
  );
};

export default AddCategory;
