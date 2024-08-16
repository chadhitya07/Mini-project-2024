// src/pages/GetStarted.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css'; // Import the CSS file

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard'); // Navigate to the Dashboard
  };

  return (
    <div>

    <div className="get-started-container">
      <Typography variant="h3" className="get-started-title" color="white" gutterBottom>
        REMOTE WORK COLLABORATION
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetStarted}
        className="get-started-button"
        >
        Get Started
      </Button>
    </div>
    <div className='suiii'>
      <Typography variant='h4' className="suvi">
        #NO 1 BEST PLATFORM AT WORK COLLABORATION
      </Typography>
        </div>


    </div>
  );
};

export default GetStarted;
