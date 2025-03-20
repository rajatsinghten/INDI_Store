import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Badge, 
  IconButton, 
  Box, 
  Menu, 
  MenuItem, 
  Container, 
  useMediaQuery, 
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import { 
  ShoppingCart as ShoppingCartIcon, 
  Menu as MenuIcon, 
  Close as CloseIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../utils/CartContext';

const Header: React.FC = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Categories', path: '/categories' },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          IndiBazaar
        </Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2E3B55' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: { xs: 0, md: 1 }
            }}
          >
            IndiBazaar
          </Typography>

          {isMobile ? (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  justifyContent: 'center'
                }}
              >
                IndiBazaar
              </Typography>
              
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={getCartCount()} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              
              <Box sx={{ flexGrow: 0 }}>
                <IconButton color="inherit" component={Link} to="/cart" size="large">
                  <Badge badgeContent={getCartCount()} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 