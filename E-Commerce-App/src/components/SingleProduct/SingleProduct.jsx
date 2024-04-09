import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products/${id}`);
        setProduct(response.data.data); // Assuming the response contains the product data
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();

    // Cleanup function to abort fetch if component unmounts
    return () => {
      // Abort fetch or clean up any resources if needed
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default SingleProduct;
