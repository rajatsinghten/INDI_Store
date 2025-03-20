import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Rating, 
  Box 
} from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../data/products';
import { useCart } from '../../utils/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        }
      }}
      elevation={3}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating name="read-only" value={4} readOnly size="small" precision={0.5} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            (4.0)
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          mb: 2
        }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button 
          size="small" 
          variant="outlined" 
          onClick={handleViewDetails}
        >
          View Details
        </Button>
        <Button 
          size="small" 
          variant="contained" 
          startIcon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
          sx={{ bgcolor: '#2E3B55' }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard; 