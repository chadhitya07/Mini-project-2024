import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dashboard, AccountCircle, Settings, Group, Assignment, Task, Folder, Chat, Videocam, CalendarToday, Notifications, BarChart } from '@mui/icons-material';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  // Handle mouse movement near the left edge
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: isVisible ? 0 : '-200px', // Adjust based on the width of the sidebar
    height: '100vh',
    width: '200px',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    zIndex: 1000,
    transition: 'left 0.3s ease-in-out',
  };

  const listItemStyle = {
    color: 'white',
  };

  return (
    <Box
      sx={sidebarStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <List>
        <ListItem button component={Link} to="/" sx={listItemStyle}>
          <ListItemIcon><Dashboard style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/profile" sx={listItemStyle}>
          <ListItemIcon><AccountCircle style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/settings" sx={listItemStyle}>
          <ListItemIcon><Settings style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/team-management" sx={listItemStyle}>
          <ListItemIcon><Group style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Team Management" />
        </ListItem>
        <ListItem button component={Link} to="/project-management" sx={listItemStyle}>
          <ListItemIcon><Assignment style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Project Management" />
        </ListItem>
        <ListItem button component={Link} to="/task-management" sx={listItemStyle}>
          <ListItemIcon><Task style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Task Management" />
        </ListItem>
        <ListItem button component={Link} to="/file-sharing" sx={listItemStyle}>
          <ListItemIcon><Folder style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="File Sharing" />
        </ListItem>
        <ListItem button component={Link} to="/chat" sx={listItemStyle}>
          <ListItemIcon><Chat style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button component={Link} to="/video-call" sx={listItemStyle}>
          <ListItemIcon><Videocam style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Video Call" />
        </ListItem>
        <ListItem button component={Link} to="/calendar" sx={listItemStyle}>
          <ListItemIcon><CalendarToday style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/notifications" sx={listItemStyle}>
          <ListItemIcon><Notifications style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button component={Link} to="/reports" sx={listItemStyle}>
          <ListItemIcon><BarChart style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
