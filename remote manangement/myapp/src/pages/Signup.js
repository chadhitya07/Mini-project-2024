// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data to be sent to the backend
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Post request using Axios
      const response = await axios.post('http://localhost:7777/api/users', userData);
      // Handle response if needed
      console.log(response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>Already have an account? <a href="/login" className="login-link">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
