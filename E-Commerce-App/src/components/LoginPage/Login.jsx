import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import './Login.css';

const UserLoginForm = () => {
  // const history = useHistory(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/users',
        formData
      );
      console.log('User logged in successfully!');
      setFormData({
        email: '',
        password: '',
    })}catch (error) {
      console.error('Error registering user:', error.message);
    }}
      
// Execute the directive after successful login 
  //  const emailArray = formData.email.split('@');
  //     if (emailArray[0].includes('bu')) {
  //       history.push('/Home'); 
  //     } else if (emailArray[0].includes('sa')) {
  //       history.push('/seller'); 
  //     } else {
  //       history.push('/register'); 
  //     }
      
  //   } catch (error) {
  //     console.error("Error logging in:", error.message);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
        <input
        className='input-register'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className='register-ptn ' type="submit">Login</button>
      </form>
      </div>
      
    </div>
    );
  }
export default UserLoginForm 
