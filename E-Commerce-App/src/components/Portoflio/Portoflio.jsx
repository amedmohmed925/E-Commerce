import React, { useState, useContext } from 'react';
import axios from 'axios';
import openModal from "../../store/current";
import { useNavigate } from 'react-router-dom';
import '../RegisterPage/register.css';

const ModifyProfilePage = () => {
  const { curUser, curToken } = useContext(openModal);
  console.log(curUser);
  console.log(curToken.token);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [userImage, setuserImage] = useState('');
 
  const navigate = useNavigate();
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.patch(
        `https://e-commerce-nestjs-1ad58a9d5c9f.herokuapp.com/users/${curUser.id}`,
        { firstName, lastName, email, password, type, address, userImage },
        {withCredentials : true},
        {
          headers: {
            'Authorization': `Bearer ${curToken.token}`,
          },
        },

      );
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="formRegister" onSubmit={handleUpdateProfile}>
        <h2 className="titlePage">Modify Profile</h2>
        <input
          className="input-register"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          className="input-register"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="input-register"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input-register"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassowrd(e.target.value)}
        />
        <select
          className="input-register"
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <input
          className="input-register"
          type="text"
          name="address"
          placeholder="Address (Optional)"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          className="input-register"
          type="text"
          name="userImage"
          placeholder="User Image URL (Optional)"
          value={userImage}
          onChange={e => setuserImage(e.target.value)}
        />
        <button className='register-ptn ' type="submit">Update Profile</button>
      </form>

    </div>
  );
};

export default ModifyProfilePage;
