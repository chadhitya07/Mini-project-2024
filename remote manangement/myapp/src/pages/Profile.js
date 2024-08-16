import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Paper sx={{ padding: 2, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="h4">Profile</Typography>
        <Typography variant="body1">
          This is the profile page. Here, users can view and update their personal information.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
