import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  IconButton, 
  Divider, 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Alert,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  KeyboardReturn as KeyboardReturnIcon,
  CreditCard as CreditCardIcon,
  LockOutlined as LockOutlinedIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../utils/CartContext';

const CartPage: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle quantity change
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  // Handle checkout button click
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Your Shopping Cart
      </Typography>
      
      {cartItems.length === 0 ? (
        <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: '#f8f9fa' }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Your cart is empty
          </Alert>
          <Typography variant="body1" gutterBottom>
            Looks like you haven't added any products to your cart yet.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/products')}
            sx={{ mt: 2, bgcolor: '#2E3B55' }}
          >
            Continue Shopping
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 2 }}>
              {isMobile ? (
                // Mobile view - stacked cards
                <Box>
                  {cartItems.map((item) => (
                    <Card key={item.id} sx={{ display: 'flex', mb: 2, border: '1px solid #eee' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100, objectFit: 'cover' }}
                        image={item.image}
                        alt={item.name}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <CardContent sx={{ flex: '1 0 auto', p: 2 }}>
                          <Typography component="div" variant="h6" noWrap>
                            {item.name}
                          </Typography>
                          <Typography variant="subtitle1" color="primary" component="div">
                            ${item.price.toFixed(2)}
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pt: 0, justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton 
                              size="small" 
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <TextField
                              size="small"
                              value={item.quantity}
                              sx={{ width: 40, mx: 1, '& input': { textAlign: 'center', p: '6px' } }}
                              inputProps={{ 
                                min: 1, 
                                readOnly: true 
                              }}
                            />
                            <IconButton 
                              size="small" 
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                          <IconButton 
                            color="error" 
                            size="small" 
                            onClick={() => removeFromCart(item.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Card>
                  ))}
                </Box>
              ) : (
                // Desktop view - table
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="center">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                            />
                            <Typography variant="body1">{item.name}</Typography>
                          </TableCell>
                          <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                          <TableCell align="center">
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <IconButton 
                                size="small" 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <TextField
                                size="small"
                                value={item.quantity}
                                sx={{ width: 40, mx: 1, '& input': { textAlign: 'center', p: '6px' } }}
                                inputProps={{ 
                                  min: 1, 
                                  readOnly: true 
                                }}
                              />
                              <IconButton 
                                size="small" 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body1" fontWeight="bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <IconButton 
                              color="error" 
                              onClick={() => removeFromCart(item.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, px: 2 }}>
                <Button 
                  startIcon={<KeyboardReturnIcon />}
                  onClick={() => navigate('/products')}
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              
              <Box sx={{ my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Subtotal</Typography>
                  <Typography variant="body1">${getCartTotal().toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Shipping</Typography>
                  <Typography variant="body1">Free</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Tax</Typography>
                  <Typography variant="body1">
                    ${(getCartTotal() * 0.10).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${(getCartTotal() + getCartTotal() * 0.10).toFixed(2)}
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<CreditCardIcon />}
                onClick={handleCheckout}
                sx={{ 
                  mt: 2, 
                  py: 1.5, 
                  bgcolor: '#2E3B55',
                  '&:hover': {
                    bgcolor: '#1E2B45',
                  }
                }}
              >
                Proceed to Checkout
              </Button>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                <LockOutlinedIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  Secure Checkout
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CartPage; 