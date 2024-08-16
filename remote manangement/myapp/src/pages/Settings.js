import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import './Settings.css'
const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Profile updated:', profile);
    console.log('Notifications updated:', notifications);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          name="password"
          value={profile.password}
          onChange={handleInputChange}
        />
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notifications.emailNotifications}
              onChange={handleSwitchChange}
              name="emailNotifications"
            />
          }
          label="Email Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={notifications.pushNotifications}
              onChange={handleSwitchChange}
              name="pushNotifications"
            />
          }
          label="Push Notifications"
        />
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
