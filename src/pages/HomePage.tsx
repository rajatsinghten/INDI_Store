import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '50vh', md: '60vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          p: 4
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Welcome to IndiBazaar
          </Typography>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Discover Quality Products at Affordable Prices
          </Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate('/products')}
              sx={{
                bgcolor: theme.palette.primary.main,
                px: 4,
                py: 1.5
              }}
            >
              Shop Now
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate('/categories')}
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Browse Categories
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Featured Products
          </Typography>
          <Button 
            endIcon={<ChevronRightIcon />} 
            onClick={() => navigate('/products')}
            sx={{ fontWeight: 500 }}
          >
            View All
          </Button>
        </Box>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      height: '40px'
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2, fontWeight: 600 }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    onClick={() => navigate(`/product/${product.id}`)}
                    sx={{ ml: 1, mb: 1 }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Box sx={{ bgcolor: '#f7f7f7', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            {categories.slice(0, 4).map((category, index) => {
              const categoryProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
              const image = categoryProducts[0]?.image;
              
              return (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Paper 
                    elevation={2}
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        height: 140,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {categoryProducts.length} Products
                      </Typography>
                      <Button 
                        size="small" 
                        onClick={() => navigate(`/categories?category=${category.toLowerCase()}`)}
                        sx={{ mt: 1 }}
                      >
                        Browse
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Special Offer */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: 2
          }}
        >
          <Box sx={{ flex: 1, mb: { xs: 3, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Special Offer
            </Typography>
            <Typography variant="h6" gutterBottom>
              Get 20% off on all products
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
              Use code <Box component="span" sx={{ fontWeight: 'bold' }}>INDI20</Box> at checkout
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/products')}
              endIcon={<ArrowForwardIcon />}
            >
              Shop Now
            </Button>
          </Box>
          <Box 
            sx={{ 
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Special offer"
              sx={{
                width: '100%',
                maxWidth: 300,
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            />
          </Box>
        </Paper>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ bgcolor: '#2E3B55', color: 'white', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Join Our Newsletter
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            <Box
              component="input"
              placeholder="Your email address"
              sx={{
                flex: 1,
                py: 1.5,
                px: 2,
                border: 'none',
                borderRadius: 1,
                fontSize: '1rem'
              }}
            />
            <Button
              variant="contained"
              sx={{ 
                py: { xs: 1.5, sm: 'auto' },
                bgcolor: '#f50057',
                '&:hover': {
                  bgcolor: '#c51162'
                } 
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 