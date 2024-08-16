import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import GetStarted from './pages/GetStarted';
import Dashboard from './pages/DashBoard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import TeamManagement from './pages/TeamManagement';
import ProjectManagement from './pages/ProjectManagement';
import TaskManagement from './pages/TaskManagement';
import FileSharing from './pages/FileSharing';
import Chat from './pages/Chat';
import VideoCall from './pages/VedioCall' // Corrected
import Calendar from './pages/Calender'   // Corrected
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Box className="app-content">
        <Sidebar />
        <Box className="main-content">
          <Routes>
          <Route path="/" element={<GetStarted />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/team-management" element={<TeamManagement />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/task-management" element={<TaskManagement />} />
            <Route path="/file-sharing" element={<FileSharing />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/video-call" element={<VideoCall />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
