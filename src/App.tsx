import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductList from './components/Products/ProductList'
import { CartProvider } from './utils/CartContext'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100% !important',
          padding: '0 24px',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '100vh',
              width: '100%',
            }}
          >
            <Header />
            <Box 
              component="main" 
              sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/categories" element={<ProductList />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
