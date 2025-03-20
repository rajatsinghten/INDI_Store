import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider, useTheme, useMediaQuery } from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  Pinterest as PinterestIcon 
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#2E3B55',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              IndiBazaar
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop shop for quality products at affordable prices. We deliver exceptional shopping experiences.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href="#" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit">
                <PinterestIcon />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/products" color="inherit" underline="hover">
                  All Products
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/categories" color="inherit" underline="hover">
                  Categories
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/products" color="inherit" underline="hover">
                  New Arrivals
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/products" color="inherit" underline="hover">
                  Featured
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Contact
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Careers
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Blog
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Help Center
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Shipping Info
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Returns
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  FAQ
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Terms of Service
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Privacy Policy
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Cookie Policy
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Compliance
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start' }}>
          <Typography variant="body2" align={isMobile ? 'center' : 'left'}>
            © {new Date().getFullYear()} IndiBazaar. All rights reserved.
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit" underline="hover">
                <Typography variant="body2">Payment Methods</Typography>
              </Link>
              <Link href="#" color="inherit" underline="hover">
                <Typography variant="body2">Shipping</Typography>
              </Link>
              <Link href="#" color="inherit" underline="hover">
                <Typography variant="body2">Returns</Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 