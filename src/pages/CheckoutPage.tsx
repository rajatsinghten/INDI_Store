import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LockOutlined as LockOutlinedIcon,
  CreditCard as CreditCardIcon,
  LocalShipping as LocalShippingIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../utils/CartContext';

// Step components
const steps = ['Shipping Address', 'Payment Details', 'Review Order'];

const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    saveAddress: false,
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard: false,
    paymentMethod: 'credit',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle shipping info form changes
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: name === 'saveAddress' ? checked : value,
    });
  };

  // Handle payment info form changes
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: name === 'saveCard' ? checked : value,
    });
  };

  // Format credit card number with spaces
  const formatCreditCard = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle next step button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle back button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Handle order submission
  const handlePlaceOrder = () => {
    // In a real app, you would send the order to a backend API
    // Here we'll just simulate order placement
    setOrderPlaced(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  // Calculate order totals
  const subtotal = getCartTotal();
  const shippingCost = 0; // Free shipping
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  // Handle credit card number input
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPaymentInfo({
      ...paymentInfo,
      cardNumber: formatCreditCard(value),
    });
  };

  // Form validation
  const isShippingFormValid = () => {
    const { firstName, lastName, email, phone, address, city, state, zip } = shippingInfo;
    return firstName && lastName && email && phone && address && city && state && zip;
  };

  const isPaymentFormValid = () => {
    const { cardName, cardNumber, expDate, cvv } = paymentInfo;
    return cardName && cardNumber.length >= 19 && expDate && cvv.length >= 3;
  };

  // Render shipping form
  const renderShippingForm = () => {
    return (
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              value={shippingInfo.firstName}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={shippingInfo.lastName}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={shippingInfo.email}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="street-address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="address-level2"
              value={shippingInfo.city}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="state"
              label="State/Province/Region"
              name="state"
              autoComplete="address-level1"
              value={shippingInfo.state}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="zip"
              label="Zip / Postal code"
              name="zip"
              autoComplete="postal-code"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="country"
              label="Country"
              name="country"
              autoComplete="country-name"
              value={shippingInfo.country}
              onChange={handleShippingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="saveAddress"
                  color="primary"
                  checked={shippingInfo.saveAddress}
                  onChange={handleShippingChange}
                />
              }
              label="Save this information for next time"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isShippingFormValid()}
            sx={{ 
              py: 1.5, 
              px: 4, 
              bgcolor: '#2E3B55',
              '&:hover': {
                bgcolor: '#1E2B45',
              }
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    );
  };

  // Render payment form
  const renderPaymentForm = () => {
    return (
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            aria-label="payment-method"
            name="paymentMethod"
            value={paymentInfo.paymentMethod}
            onChange={handlePaymentChange}
            row
          >
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            <FormControlLabel
              value="applepay"
              control={<Radio />}
              label="Apple Pay"
            />
          </RadioGroup>
        </FormControl>

        {paymentInfo.paymentMethod === 'credit' && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="cardName"
                label="Name on Card"
                name="cardName"
                autoComplete="cc-name"
                value={paymentInfo.cardName}
                onChange={handlePaymentChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="cardNumber"
                label="Card Number"
                name="cardNumber"
                autoComplete="cc-number"
                value={paymentInfo.cardNumber}
                onChange={handleCardNumberChange}
                inputProps={{ maxLength: 19 }}
                placeholder="1234 5678 9012 3456"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="expDate"
                label="Expiry Date"
                name="expDate"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                value={paymentInfo.expDate}
                onChange={handlePaymentChange}
                inputProps={{ maxLength: 5 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cvv"
                label="CVV"
                name="cvv"
                autoComplete="cc-csc"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
                inputProps={{ maxLength: 4 }}
                helperText="Last three digits on signature strip"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="saveCard"
                    color="primary"
                    checked={paymentInfo.saveCard}
                    onChange={handlePaymentChange}
                  />
                }
                label="Save this card for future purchases"
              />
            </Grid>
          </Grid>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button onClick={handleBack}>Back</Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={paymentInfo.paymentMethod === 'credit' && !isPaymentFormValid()}
            sx={{ 
              py: 1.5, 
              px: 4, 
              bgcolor: '#2E3B55',
              '&:hover': {
                bgcolor: '#1E2B45',
              }
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    );
  };

  // Render order review
  const renderOrderReview = () => {
    return (
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Shipping Address
            </Typography>
            <Typography gutterBottom>
              {shippingInfo.firstName} {shippingInfo.lastName}
            </Typography>
            <Typography gutterBottom>{shippingInfo.address}</Typography>
            <Typography gutterBottom>
              {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}
            </Typography>
            <Typography gutterBottom>{shippingInfo.country}</Typography>
            <Typography gutterBottom>{shippingInfo.phone}</Typography>
            <Typography gutterBottom>{shippingInfo.email}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
            {paymentInfo.paymentMethod === 'credit' ? (
              <>
                <Typography gutterBottom>
                  Card Name: {paymentInfo.cardName}
                </Typography>
                <Typography gutterBottom>
                  Card Number: **** **** **** {paymentInfo.cardNumber.slice(-4)}
                </Typography>
                <Typography gutterBottom>
                  Expiry Date: {paymentInfo.expDate}
                </Typography>
              </>
            ) : (
              <Typography gutterBottom>
                Payment Method: {paymentInfo.paymentMethod === 'paypal' ? 'PayPal' : 'Apple Pay'}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Order Items
            </Typography>
            <List disablePadding>
              {cartItems.map((item) => (
                <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                  />
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${item.quantity}`}
                  />
                  <Typography variant="body2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1">Subtotal</Typography>
          <Typography variant="subtitle1">${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1">Shipping</Typography>
          <Typography variant="subtitle1">
            {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1">Tax (10%)</Typography>
          <Typography variant="subtitle1">${tax.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            ${total.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button onClick={handleBack}>Back</Button>
          <Button
            variant="contained"
            onClick={handlePlaceOrder}
            startIcon={<LockOutlinedIcon />}
            sx={{ 
              py: 1.5, 
              px: 4, 
              bgcolor: '#2E3B55',
              '&:hover': {
                bgcolor: '#1E2B45',
              }
            }}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    );
  };

  // Render order confirmation
  const renderOrderConfirmation = () => {
    return (
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Thank You For Your Order!
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Your order number is #{Math.floor(Math.random() * 1000000)}.
        </Typography>
        <Typography variant="body1" paragraph>
          We have emailed your order confirmation to {shippingInfo.email}. We will notify you when your order has shipped.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{ 
            mt: 3, 
            py: 1.5, 
            px: 4, 
            bgcolor: '#2E3B55',
            '&:hover': {
              bgcolor: '#1E2B45',
            }
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  };

  // Get content for active step
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderOrderReview();
      default:
        throw new Error('Unknown step');
    }
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="info" sx={{ mb: 3 }}>
          Your cart is empty. Add some products before proceeding to checkout.
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/products')}
          sx={{ 
            mt: 2, 
            bgcolor: '#2E3B55'
          }}
        >
          Browse Products
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Checkout
        </Typography>

        {orderPlaced ? (
          renderOrderConfirmation()
        ) : (
          <>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {getStepContent(activeStep)}
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={0} sx={{ p: 3, bgcolor: '#f8f9fa' }}>
                  <Typography variant="h6" gutterBottom>
                    Order Summary
                  </Typography>
                  <List disablePadding>
                    {cartItems.map((item) => (
                      <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                          primary={item.name}
                          secondary={`Qty: ${item.quantity}`}
                        />
                        <Typography variant="body2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Subtotal</Typography>
                      <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Shipping</Typography>
                      <Typography variant="body2">
                        {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Tax (10%)</Typography>
                      <Typography variant="body2">${tax.toFixed(2)}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      ${total.toFixed(2)}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
                    <LockOutlinedIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      Secure Checkout
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default CheckoutPage; 