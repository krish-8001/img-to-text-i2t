import React from 'react';
import { Container, List, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <List style={{ display: 'flex', flexDirection: 'row' }}>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                },
                textTransform: 'none', // Change text to lowercase
              }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                },
                textTransform: 'none', // Change text to lowercase
              }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                },
                textTransform: 'none', // Change text to lowercase
              }}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                },
                textTransform: 'none', // Change text to lowercase
              }}
            >
              FAQs
            </Link>
          </List>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', width: '80%', }}></div>
          <Typography variant="body2" align="center" mt={2} mb={1}>
            © 2024 ImagetoTextConvert
          </Typography>
        </Box>
      </Container>
    </footer>

  );
};

export default Footer;
