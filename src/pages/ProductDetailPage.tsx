import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Box, 
  Rating, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Link,
  Alert,
  Skeleton,
  Tab,
  Tabs
} from '@mui/material';
import { 
  ShoppingCart as ShoppingCartIcon, 
  ChevronLeft as ChevronLeftIcon,
  LocalShipping as LocalShippingIcon,
  CreditCard as CreditCardIcon,
  CachedOutlined as CachedOutlinedIcon
} from '@mui/icons-material';
import { Product, products } from '../data/products';
import { useCart } from '../utils/CartContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct || null);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Skeleton variant="text" width={300} height={40} />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" width="100%" height={400} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="text" width="70%" height={40} />
            <Skeleton variant="text" width={100} height={30} sx={{ mt: 2 }} />
            <Skeleton variant="text" width="90%" height={20} sx={{ mt: 2 }} />
            <Skeleton variant="text" width="90%" height={20} />
            <Skeleton variant="text" width="90%" height={20} />
            <Skeleton variant="rectangular" width={200} height={50} sx={{ mt: 4 }} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          Product not found!
        </Alert>
        <Button
          startIcon={<ChevronLeftIcon />}
          onClick={() => navigate('/products')}
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Reset quantity
    setQuantity(1);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          Home
        </Link>
        <Link underline="hover" color="inherit" onClick={() => navigate('/products')} sx={{ cursor: 'pointer' }}>
          Products
        </Link>
        <Link underline="hover" color="inherit" onClick={() => navigate(`/categories?category=${product.category}`)} sx={{ cursor: 'pointer' }}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>
      
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              aspectRatio: '1',
            }}
            src={product.image}
            alt={product.name}
          />
        </Grid>
        
        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={4} readOnly precision={0.5} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              (4.0) 24 Reviews
            </Typography>
          </Box>
          
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>
            ${product.price.toFixed(2)}
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
            {product.description}
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mr: 3 }}>
              Quantity:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <Typography sx={{ mx: 2, minWidth: '30px', textAlign: 'center' }}>
                {quantity}
              </Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => handleQuantityChange(1)}
              >
                +
              </Button>
            </Box>
          </Box>
          
          {/* Add to Cart Button */}
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
            fullWidth
            sx={{ 
              py: 1.5, 
              bgcolor: '#2E3B55',
              '&:hover': {
                bgcolor: '#1E2B45',
              }
            }}
          >
            Add to Cart
          </Button>
          
          {/* Shipping & Returns Info */}
          <Paper elevation={0} sx={{ mt: 4, p: 2, bgcolor: '#f8f9fa' }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Free Shipping" 
                  secondary="Free standard shipping on orders over $50" 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Secure Payment" 
                  secondary="Multiple payment methods accepted" 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CachedOutlinedIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Easy Returns" 
                  secondary="30 day return policy" 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Product Info Tabs */}
      <Box sx={{ width: '100%', mt: 6 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="product information tabs"
            centered
          >
            <Tab label="Description" />
            <Tab label="Features" />
            <Tab label="Reviews" />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, erat sit amet fermentum feugiat, nibh libero tincidunt massa, sit amet faucibus nisl nisi id purus. Nullam euismod, nisi vel consectetur fermentum, enim nulla facilisis mi, sit amet placerat nisi arcu sit amet leo.
          </Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Product Features:
          </Typography>
          <ul>
            <li>High-quality material</li>
            <li>Durable and long-lasting</li>
            <li>Easy to maintain</li>
            <li>Comfortable fit</li>
            <li>Trendy design</li>
          </ul>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1" paragraph>
            Product reviews coming soon!
          </Typography>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default ProductDetailPage; 