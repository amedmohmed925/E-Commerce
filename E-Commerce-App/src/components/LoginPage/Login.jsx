import React, { useState,useContext } from 'react';
// import { useHistory } from 'react-router-dom'; 
//import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import openModal from "../../store/current.jsx";
import './Login.css';
import { Link ,useNavigate } from 'react-router-dom';

const UserLoginForm = () => {
  const { addUser,addToken } = useContext(openModal);

  const navigate = useNavigate();
  // const history = useHistory(); 
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
        formData
      );
      // const resData = await response.json();
      console.log(response.data);
      
      if(response.data.status === "success") {
        console.log(response.data.result.id);
        console.log(response.data.result.token);
        addUser({id:response.data.result.id});
        addToken({token:response.data.result.token});
        navigate("/");
      }

      setFormData({
        email: '',
        password: '',
    })}catch (error) {
      console.error('Error registering user:', error.message);
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
    }}

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

        <button className='register-ptn ' type="submit">Login</button>
       <div style={{display:"flex",gap:"5vw",marginLeft:"20vw",marginTop:"2vh"}}>
        <p style={{marginLeft:"-2vw"}}>can`t login?</p>
        <Link to={'/register'} >CreatAccount</Link>
     </div> 
     </form>
      </div>
      
    </div>
    );
  }

export default UserLoginForm 
