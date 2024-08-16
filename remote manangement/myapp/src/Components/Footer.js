import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Container maxWidth="md" className="footer-container">
        <Typography variant="h6" className="footer-title">
          Contact Us
        </Typography>
        <Box className="footer-content">
          <Typography variant="body1" className="footer-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 3/79 c,
          </Typography>
          <Typography variant="body1" className="footer-text">
            <FontAwesomeIcon icon={faPhone} /> +91 9597919300
          </Typography>
          <Typography variant="body1" className="footer-text">
            <FontAwesomeIcon icon={faEnvelope} /> <Link href="mailto:contact@example.com">chadhityarathna@example.com</Link>
          </Typography>
        </Box>
        <Box className="footer-social">
          <Link href="https://www.facebook.com" className="footer-social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://www.twitter.com" className="footer-social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://www.instagram.com" className="footer-social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.linkedin.com" className="footer-social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </Box>
        <Typography variant="body2" className="footer-copyright">
          &copy; 2024 My App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
