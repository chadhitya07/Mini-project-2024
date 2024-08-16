import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="appbar" sx={{backgroundColor:'black'}}>
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
      
        </Typography>
        <Button color="inherit" component={Link} to="/" className="home-button">
          <FontAwesomeIcon icon={faHome} className="header-icon" /> Home
        </Button>
        <div className="auth-buttons">
          <Button color="inherit" component={Link} to="/login" className="login-button">
            <FontAwesomeIcon icon={faSignInAlt} className="header-icon" /> Login
          </Button>
          <Button color="inherit" component={Link} to="/signup" className="signup-button">
            <FontAwesomeIcon icon={faUserPlus} className="header-icon" /> Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
