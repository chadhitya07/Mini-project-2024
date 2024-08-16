import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';

const socket = io('http://localhost:4000'); // Ensure this matches your backend's URL

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for messages from the server
        socket.on('chatMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Clean up the effect
        return () => {
            socket.off('chatMessage');
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chatMessage', message); // Send message to server
            setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
            setMessage('');
        }
    };

    return (
        <Box 
            sx={{ 
                padding: 3, 
                backgroundColor: 'rgba(245, 245, 245, 0.9)', 
                borderRadius: '8px', 
                boxShadow: '0 3px 6px rgba(0,0,0,0.1)', 
                maxWidth: '500px', 
                margin: '0 auto',
                mt: 4,
                backgroundImage: 'url("https://cdn.techgyd.com/live-chat-1.png")', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Remote Work Collaboration Chat
            </Typography>
            <List 
                sx={{ 
                    maxHeight: '300px', 
                    overflowY: 'auto', 
                    mb: 2, 
                    backgroundColor: '#fff', 
                    borderRadius: '8px', 
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                    padding: 2 
                }}
            >
                {messages.map((msg, index) => (
                    <ListItem 
                        key={index} 
                        sx={{ 
                            padding: '8px 16px', 
                            backgroundColor: index % 2 === 0 ? '#e0f7fa' : '#ffffff', 
                            borderRadius: '4px', 
                            marginBottom: '8px'
                        }}
                    >
                        <Typography>{msg}</Typography>
                    </ListItem>
                ))}
            </List>
            <TextField
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                sx={{
                    marginBottom: 2,
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={sendMessage}
                sx={{ 
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                    }
                }}
            >
                Send
            </Button>
        </Box>
    );
};

export default Chat;
