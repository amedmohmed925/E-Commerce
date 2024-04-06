import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import './UserLoginForm.css';

const UserLoginForm = () => {
  const history = useHistory(); 
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
      });
      
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
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
export default UserLoginForm ;
  
