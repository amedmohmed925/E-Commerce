import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import './ShopPage.css';

const SellerProductList = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

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

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handlePlusQuantity = (index) => {
    const updatedProducts = [...sellerProducts];
    updatedProducts[index].quantity += 1;
    setSellerProducts(updatedProducts);
    updateCart(updatedProducts[index]);
  };

  const handleMinusQuantity = (index) => {
    const updatedProducts = [...sellerProducts];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setSellerProducts(updatedProducts);
      updateCart(updatedProducts[index]);
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
    const updatedCartItems = cartItems.filter((item) => item.id !== updatedProducts[index].id);
    setCartItems(updatedCartItems);
  };

  const updateCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = product.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const filteredProducts = sellerProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const cartSection = document.getElementById('cartSection');
  const closeCartSection = () => {
    setShowCart(false);
    cartSection.style.display = 'none';
  }
  return (
    <>
      <Navbar setShowCart={setShowCart} showCart={showCart} cartItems={cartItems}/>
      
      <div className={`mainSection ${showCart ? 'showCart' : ''}`}>
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
                <Link  className={`addToCart ${selectedProductIndex === index ? 'hidden' : ''}`} onClick={() => show(index)}>Add To Cart</Link>
              </div>
              <div className={`ptns ${selectedProductIndex === index ? 'show' : ''}`}>
                <div className="ptnsQuan">
                  <button className='ptnQuantity' onClick={() => handlePlusQuantity(index)}>+</button>
                  <p className='quantity'>{product.quantity} In Cart</p>
                  <button className='ptnQuantity ptnMines' onClick={() => handleMinusQuantity(index)}>-</button>
                </div>
                <button onClick={() => hide(index)} className='ptnRemove'>Remove </button>
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
        {showCart && (
          <div id='cartSection' className="cartSection ">
           <div className='HeaderCart'>

            <h2>Cart</h2>
            <span title='Close' className='CloseIcon' onClick={closeCartSection}>x</span>
           </div>
            {cartItems.map((item, index) => (
              <div className='cardprod' key={item.id}>
                <img src={item.prodImage}  />
                <p > product Name:  
                  <span className='fontWeight'> {item.name}</span>
                   <br />  Quantity: 
                   <span className='fontWeight'> {item.quantity}</span><br />
                   price: 
                   <span className='fontWeight'>  {item.price}$ </span>
                   <span title='Remove From Cart' onClick={() => hide(index)} className='removeFromCart'>Remove </span>

                   </p>

              </div>
            ))}
            <div className='footer'>

            <p  id='total'>Total Price: <span className='fontWeight'>${totalPrice}</span></p>
            <button className='ptn-Buy'>Buy Now</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SellerProductList;
