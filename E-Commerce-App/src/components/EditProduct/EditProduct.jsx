import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer-2';
import { useParams } from 'react-router-dom';
import './EditProduct.css';

const EditProductPage = () => {
  const { id } = useParams();
  const [originalProduct, setOriginalProduct] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    prodImage: '',
  });
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    prodImage: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products/${id}`, { withCredentials: true });
        const fetchedProduct = response.data.data;
        setOriginalProduct(fetchedProduct);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products/${id}`, product, { withCredentials: true });
      console.log('Product updated:', response.data);
      if (response.ok) {
        console.log("success");
      }
      setSuccessMessage('The product has been successfully updated.');

    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const resetData = () => {
    setProduct({
      ...originalProduct
    });
  };

  return (
    <div>
      <Navbar />
      <div className='mainSection'>
        <h2>Edit Product</h2>
        <form className='EditData' onSubmit={handleSubmit}>
          <div>
            <label className='labelEdit' htmlFor="name">Name:</label>
            <input className='inputEdit' type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
          </div>

          <div>
            <label className='labelEdit' htmlFor="description">Description:</label>
            <textarea className='inputEdit' id="description" name="description" value={product.description} onChange={handleInputChange}></textarea>
          </div>

          <div>
            <label className='labelEdit' htmlFor="price">Price:</label>
            <input className='inputEdit' type="text" id="price" name="price" value={product.price} onChange={handleInputChange} />
          </div>
          <div>
            <label className='labelEdit' htmlFor="stockQuantity">Stock Quantity:</label>
            <input className='inputEdit' type="text" id="stockQuantity" name="stockQuantity" value={product.stockQuantity} onChange={handleInputChange} />
          </div>
          <div>
            <label className='labelEdit' htmlFor="prodImage">Product Image:</label>
            <input className='inputEdit' type="text" id="prodImage" name="prodImage" value={product.prodImage} onChange={handleInputChange} />
          </div>
          <div>
            <button className='ptnSave' type="submit">Save Changes</button>
            {successMessage && <div className='success' style={{ color: 'green', marginLeft: '165px' }}>{successMessage}</div>}
          </div>

        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProductPage;
