


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS file

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value); 
  }

  const handleFormData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password
      });
      localStorage.setItem('jwttoken', response.data.token);
      navigate('/viewpost');
    } catch (error) {
      setLoginError("Incorrect username or password");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleFormData}>
        <label>Username</label>
        <input type='text' value={username} onChange={handleUsername}></input>
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword}></input>
        <button>Submit</button>
      </form>
      <h4 className="error">{loginError}</h4>
    </div>
  );
}

