import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer-2';
import './DeleteProduct.css'
const DeleteProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products/${id}`,{withCredentials: true});
            console.log('Product deleted successfully');
            navigate('/shop'); 
        } catch (error) {
            console.error('Error deleting product:', error);
            setError('Failed to delete product.');
        }
    };
    const dontDelete = () => {
        navigate('/shop');
    }
    return (
        <div>
            <Navbar />
            <div className='deleteSection'>
                <h2 className='titleSectionDelete'>Delete Product</h2>
                <div >
                <span>Are You Sure Delete This Product?</span>
               <div className="ptns">
                 <button className="btn btn-danger" onClick={handleDeleteProduct}>Delete</button>
                 <button className="btn btn-primary" onClick={dontDelete}>Cancel</button>
               </div>
               
                {error && <div style={{ color: 'red' }}>{error}</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DeleteProduct;
