import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: '', 
    address: '',
    userImage: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/users', formData);
      console.log('User registered successfully!');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        type: '',
        address: '',
        userImage: '',
      });
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
    
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
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
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <input
          type="text"
          name="address"
          placeholder="Address (Optional)"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userImage"
          placeholder="User Image URL (Optional)"
          value={formData.userImage}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
