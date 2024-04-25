import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer-2';
const Deletecategories = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDeletecategories = async () => {
        try {
            await axios.delete(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/categories/${id}`,{withCredentials: true});
            console.log('categories deleted successfully');
            navigate('/categories'); 
        } catch (error) {
            console.error('Error deleting categories:', error);
            setError('Failed to delete categories.');
        }
    };
    const dontDelete = () => {
        navigate('/categories');
    }
    return (
        <div>
            <Navbar />
            <div className='deleteSection'>
                <h2 className='titleSectionDelete'>Delete categories</h2>
                <div >
                <span>Are You Sure Delete This category?</span>
               <div className="ptns">
                 <button className="btn btn-danger" onClick={handleDeletecategories}>Delete</button>
                 <button className="btn btn-primary" onClick={dontDelete}>Cancel</button>
               </div>
               
                {error && <div style={{ color: 'red' }}>{error}</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Deletecategories;
