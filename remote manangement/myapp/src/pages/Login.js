// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import {useNavigate} from 'react-router-dom';
const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State to store all users fetched from the backend
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:7777/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Error fetching users');
      setLoading(false);
    }
  };

  // useEffect to fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);
const navigate =useNavigate();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user exists and if the password matches
    const user = users.find(u => u.email === formData.email);

    if (user && user.password === formData.password) {
      alert('Login successful!');
      navigate('/dashboard');
      // Redirect to another page or perform other actions
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  // Render the component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
          <p><a href="/forgot-password" className="forgot-password-link">Forgot your password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;