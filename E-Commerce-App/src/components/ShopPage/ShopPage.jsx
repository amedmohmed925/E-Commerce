import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import './ShopPage.css';
import { Link } from 'react-router-dom';

const SellerProductList = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/products');
        const productsWithQuantity = response.data.data.map(product => ({ ...product, quantity: 0 }));
        setSellerProducts(productsWithQuantity);
      } catch (error) {
        console.error('Error fetching seller products:', error);
      }
    };
    fetchSellerProducts();
  }, []);

  const handlePlusQuantity = (index) => {
    const updatedProducts = [...sellerProducts];
    updatedProducts[index].quantity += 1;
    setSellerProducts(updatedProducts);
  };

  const handleMinusQuantity = (index) => {
    const updatedProducts = [...sellerProducts];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
      setSellerProducts(updatedProducts);
    }
  };

  const show = (index) => {
    setSelectedProductIndex(index);
  };
  
  const hide = (index) => {
    const updatedProducts = [...sellerProducts];
    updatedProducts[index].quantity = 0; 
    setSellerProducts(updatedProducts);
    setSelectedProductIndex(null); 
  };
  const filteredProducts = sellerProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className='mainSection'>
        <div className="headerSection">
        <h2 className='titleSection'>All Products</h2>
        <input 
            className="inputSection"
            type="search"
            placeholder='Search By Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
       
        <div className='MainCardsProd'>
          {filteredProducts.map((product, index) => (
            <div className='card' key={product.id}>

              <img className='imgProd' src={product.prodImage} alt="" />

              <div className="textProd ">
                <div className='titleCard'>
                <h2 className='m-0 t titleProd'>{product.name}</h2>
                <span className='priceProd'>price: {product.price}$ </span>
                </div>
               
                <p className='desProd'>{product.description}</p>

                <div className="priceQuantity">

                <span style={{ color: product.stockQuantity < 5 ? 'red' : 'green' }}>
                  Stock Quantity: {product.stockQuantity}
                </span>

                </div>
               
                <span>{product.catId}</span>

              <button className={`addToCart ${selectedProductIndex === index ? 'hidden' : ''}`} onClick={() => show(index)}>Add To Cart</button>
              </div>

              <div className={`ptns ${selectedProductIndex === index ? 'show' : ''}`}>
                <div className="ptnsQuan">
                <button className='ptnQuantity' onClick={() => handlePlusQuantity(index)}>+</button>
                <p className='quantity'>{product.quantity} In Cart</p>
                <button className='ptnQuantity ptnMines' onClick={() => handleMinusQuantity(index)}>-</button>
                </div>

                <button  onClick={() => hide(index)} className='ptnRemove'>Remove </button>
              </div>
              <div className="footerCard">
                
                <div className='ptnsEditDelete'>

                  <Link to={`/edit/${product.id}`}>
                    <button className='edit-ptn btn btn-primary'>Edit</button>
                  </Link>
                  <Link to={`/delete/${product.id}`}>
                    <button className='delete-ptn btn btn-danger'>Delete</button>
                  </Link>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerProductList;
