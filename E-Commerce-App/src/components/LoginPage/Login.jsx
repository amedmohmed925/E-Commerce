import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Login.css';

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/users/login',
        formData,
        { withCredentials: true }
      );

      localStorage.setItem('userData', JSON.stringify(response.data));
      console.log('User logged in successfully!');
      console.log(response.data)
      setFormData({
        email: '',
        password: '',
      });
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      if (error.response) {
        console.error('Error logging in:', error.response.data.message);
        if (error.response.data.message.includes('email')) {
          setEmailError(error.response.data.message);
          setPasswordError('');
        } else {
          setEmailError('');
          setPasswordError(error.response.data.message);
        }
      } else {
        console.error('Error logging in:', error.message);
      }
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'email') {
      setEmailError('');
    } else if (name === 'password') {
      setPasswordError('');
    }
  };

  return (
    <div className='main-register'>
      <div className='img-input'>
        <img className='imgPage' src="/images/register-img.jpg" alt="" />
        <form className='formRegister' onSubmit={handleSubmit}>
          <h2 className='titleLogin'>User Login</h2>
          <input
            className='input-register'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            className='input-register'
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button className='register-ptn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserLoginForm;
