// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faCog, faUsers, faProjectDiagram, faTasks,
  faFolder, faComments, faVideo, faCalendarAlt, faBell, faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { gallerySectionStyle, galleryBoxStyle } from './styles'
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Box sx={gallerySectionStyle}>
      <Typography variant="h2" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} size="4x" />
              <Typography variant="body2" color="black">Profile</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to ="/settings">
              <FontAwesomeIcon icon={faCog} size="4x" />
              <Typography variant="body2" color="black">Settings</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/team-management">
              <FontAwesomeIcon icon={faUsers} size="4x" />
              <Typography variant="body2" color="black">Team Management</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/project-management">
              <FontAwesomeIcon icon={faProjectDiagram} size="4x" />
              <Typography variant="body2" color="black">Project Management</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/task-management">
              <FontAwesomeIcon icon={faTasks} size="4x" />
              <Typography variant="body2" color="black">Task Management</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/file-sharing">
              <FontAwesomeIcon icon={faFolder} size="4x" />
              <Typography variant="body2" color="black">File Sharing</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/chat">
              <FontAwesomeIcon icon={faComments} size="4x" />
              <Typography variant="body2" color="black">Chat</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/video-call">
              <FontAwesomeIcon icon={faVideo} size="4x" />
              <Typography variant="body2" color="black">Video Call</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/calendar">
              <FontAwesomeIcon icon={faCalendarAlt} size="4x" />
              <Typography variant="body2" color="black">Calendar</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/notifications">
              <FontAwesomeIcon icon={faBell} size="4x" />
              <Typography variant="body2" color="black">Notifications</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={galleryBoxStyle} className="dashboard-item">
            <Link to="/reports">
              <FontAwesomeIcon icon={faChartBar} size="4x" />
              <Typography variant="body2" color="black">Reports</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
