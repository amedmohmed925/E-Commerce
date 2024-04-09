import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer-2';
import './Addproduct.css'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    prodImage: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products', formData);
      console.log('Product added successfully!');
      resetForm();
      setShowConfirmation(true);
      setError('');
    } catch (error) {
      console.error('Error adding product:', error.message);
      setError('Failed to add product.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setShowConfirmation(false); 
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      stockQuantity: '',
      prodImage: '',
    });
  };

  return (
    <>
      <Navbar />
      <div className='addProduct mainSection'>
        <h2>Add Product</h2>
        
        <form className='EditData' onSubmit={handleSubmit}>
          <input
          className='inputEdit' 
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
          className='inputEdit'
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
          className='inputEdit'
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={formData.stockQuantity}
            onChange={handleChange}
          />
          <textarea
          className='inputEdit'
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input className='inputEdit' type="file" accept='image/*' value={formData.prodImage} onChange={handleChange} name='prodImage'/>
          <button className='ptnSave ptnadd' type="submit">Add Product</button>
          {showConfirmation && <div className='success' style={{ color: 'green' }}>Product added successfully!</div>}
        {error && <div className='success' style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
