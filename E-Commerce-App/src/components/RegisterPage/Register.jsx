import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './register.css';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: '', 
    address: '',
    userImage: '',
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    type: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'type'];
    let hasError = false;
    const newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = true;
        hasError = true;
      } else {
        newErrors[field] = false;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      return;
    }

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
    navigate('/login'); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
    
  return (
    <div className='main-register'>
      <div className='img-input'>
        <img className='imgPage' src="/images/register-img.jpg" alt="" />
        <form className='formRegister' onSubmit={handleSubmit}>
        <h2 className='titlePage'>Create Account</h2>

           <input
           className="input-register"
          
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">Please enter your first name</p>}
          <input
          className="input-register"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">Please enter your last name</p>}
          <input
          className="input-register"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">Please enter a valid email address</p>}
          <input
          className="input-register"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">Please enter your password</p>}
          <select
          className="input-register"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
          {errors.type && <p className="error">Please select user type</p>}
          <input
          className="input-register"
            type="text"
            name="address"
            placeholder="Address (Optional)"
            value={formData.address}
            onChange={handleChange}
          />
          <input
          className="input-register"
            type="text"
            name="userImage"
            placeholder="User Image URL (Optional)"
            value={formData.userImage}
            onChange={handleChange}
          />
          <button className='register-ptn' type="submit">Register</button>
        </form>

      </div>
    </div>
  );
};

export default RegisterForm;
