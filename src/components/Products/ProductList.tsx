import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, Box, TextField, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { products, Product } from '../../data/products';

interface ProductListProps {
  title?: string;
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ title = 'All Products', category }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(category || '');
  const [sortBy, setSortBy] = useState('');
  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  // Get all unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Filter products based on search term and category
  useEffect(() => {
    let result = products;
    
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    if (sortBy === 'price-low-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-a-z') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z-a') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
    setPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, sortBy]);

  // Calculate pagination
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle category change
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  // Handle sort change
  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        {title}
      </Typography>
      
      <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <TextField
          label="Search products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 2 }}
          size="small"
        />
        
        <FormControl sx={{ flex: 1 }} size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl sx={{ flex: 1 }} size="small">
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            value={sortBy}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="price-low-high">Price: Low to High</MenuItem>
            <MenuItem value="price-high-low">Price: High to Low</MenuItem>
            <MenuItem value="name-a-z">Name: A to Z</MenuItem>
            <MenuItem value="name-z-a">Name: Z to A</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      {currentProducts.length === 0 ? (
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No products found matching your criteria.
          </Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {currentProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange} 
                color="primary" 
                size="large" 
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default ProductList; 