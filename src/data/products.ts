export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: "₹29.99",
    description: "A comfortable and stylish t-shirt made from premium cotton.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
    category: "clothing",
    rating: {
      rate: 4.5,
      count: 120
    },
    features: [
      'Comfortable',
      'Stylish',
      'Premium cotton',
      'Breathable',
      'Moisture-wicking'
    ]
  },
  {
    id: 2,
    name: "Premium Jeans",
    price: "₹89.99",
    description: "High-quality denim jeans with perfect fit and comfort.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
    category: "clothing",
    rating: {
      rate: 4.2,
      count: 85
    },
    features: [
      'High-quality denim',
      'Perfect fit',
      'Comfortable',
      'Breathable',
      'Moisture-wicking'
    ]
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "₹149.99",
    description: "Noise-cancelling wireless headphones with premium sound quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    rating: {
      rate: 4.5,
      count: 120
    },
    features: [
      'Noise-cancelling',
      'Wireless',
      'Premium sound quality',
      '30-hour battery life',
      'Bluetooth connectivity'
    ]
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "₹199.99",
    description: "Feature-rich smart watch with health tracking and notifications.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    rating: {
      rate: 4.7,
      count: 210
    },
    features: [
      'Health tracking',
      'Notifications',
      'Smart features',
      'Water-resistant',
      'Long battery life'
    ]
  },
  {
    id: 5,
    name: "Designer Handbag",
    price: "₹129.99",
    description: "Elegant designer handbag with spacious compartments.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop",
    category: "accessories",
    rating: {
      rate: 4.6,
      count: 95
    },
    features: [
      'Elegant design',
      'Spacious compartments',
      'Leather material',
      'Adjustable shoulder strap',
      'Multiple pockets'
    ]
  },
  {
    id: 6,
    name: "Running Shoes",
    price: "₹79.99",
    description: "Comfortable and durable running shoes for all terrains.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
    category: "footwear",
    rating: {
      rate: 4.3,
      count: 140
    },
    features: [
      'Comfortable',
      'Durable',
      'Breathable',
      'Moisture-wicking',
      'Grippy sole'
    ]
  },
  {
    id: 7,
    name: "Sunglasses",
    price: "₹59.99",
    description: "UV protected trendy sunglasses for a stylish look.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop",
    category: "accessories",
    rating: {
      rate: 4.4,
      count: 88
    },
    features: [
      'UV protection',
      'Stylish design',
      'Comfortable',
      'Lightweight',
      'Anti-glare'
    ]
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: "₹69.99",
    description: "Portable bluetooth speaker with rich bass and long battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    rating: {
      rate: 4.3,
      count: 140
    },
    features: [
      'Portable',
      'Rich bass',
      'Long battery life',
      'Bluetooth connectivity',
      'Multiple connectivity options'
    ]
  },
  {
    id: 9,
    name: "Smartphone Stand with Wireless Charger",
    price: "₹899",
    description: "Charge your compatible smartphone while keeping it at a viewable angle with this elegant wireless charging stand. Supports fast charging for select devices.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    rating: {
      rate: 4.2,
      count: 85
    },
    features: [
      "Qi wireless charging",
      "Adjustable viewing angle",
      "LED charging indicator",
      "Compatible with most smartphone cases",
      "Anti-slip surface"
    ]
  },
  {
    id: 10,
    name: "Smart Fitness Tracker",
    price: "₹2,499",
    description: "Monitor your health and activity with this waterproof fitness tracker featuring heart rate monitoring, sleep tracking, and smartphone notifications.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "fitness",
    rating: {
      rate: 4.7,
      count: 210
    },
    features: [
      "24/7 heart rate monitoring",
      "Sleep quality analysis",
      "Water-resistant up to 50m",
      "7-day battery life",
      "Connected GPS functionality"
    ]
  },
  {
    id: 11,
    name: "Stainless Steel Water Bottle",
    price: "₹599",
    description: "Keep your beverages hot or cold for hours with this vacuum-insulated, leak-proof, and eco-friendly water bottle that's perfect for any activity.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "lifestyle",
    rating: {
      rate: 4.8,
      count: 175
    },
    features: [
      "24-hour cold retention",
      "12-hour heat retention",
      "BPA-free construction",
      "Leak-proof design",
      "Fits standard cup holders"
    ]
  },
  {
    id: 12,
    name: "Bamboo Bath Towel Set",
    price: "₹1,299",
    description: "Experience luxury with this set of ultra-soft, highly absorbent bamboo cotton towels that are gentle on your skin and quick to dry.",
    image: "https://images.unsplash.com/photo-1600369672770-985fd30e288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home",
    rating: {
      rate: 4.6,
      count: 95
    },
    features: [
      "Made from sustainable bamboo fiber",
      "Naturally antibacterial",
      "Highly absorbent",
      "Quick-drying technology",
      "Set includes 2 bath towels, 2 hand towels, and 2 washcloths"
    ]
  },
  {
    id: 13,
    name: "Portable Bluetooth Speaker",
    price: "₹799",
    description: "Take your music anywhere with this compact, waterproof speaker offering impressive sound quality and 10 hours of playback on a single charge.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    rating: {
      rate: 4.3,
      count: 140
    },
    features: [
      "IPX7 waterproof rating",
      "10-hour battery life",
      "Built-in microphone for calls",
      "Compact and portable design",
      "Bluetooth 5.0 technology"
    ]
  },
  {
    id: 14,
    name: "Yoga Mat with Carrying Strap",
    price: "₹699",
    description: "Perfect your practice with this non-slip, eco-friendly yoga mat that provides optimal cushioning for your joints and comes with a convenient carrying strap.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "fitness",
    rating: {
      rate: 4.4,
      count: 88
    },
    features: [
      "Non-slip texture on both sides",
      "Made from eco-friendly TPE material",
      "6mm thickness for joint protection",
      "Includes carrying strap",
      "Lightweight and portable"
    ]
  },
  {
    id: 15,
    name: "Ceramic Coffee Mug Set",
    price: "₹899",
    description: "Elevate your coffee experience with this set of four stylish, hand-crafted ceramic mugs that retain heat and are microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home",
    rating: {
      rate: 4.9,
      count: 65
    },
    features: [
      "Set of 4 unique designs",
      "Hand-crafted ceramic construction",
      "Large 12oz capacity",
      "Microwave and dishwasher safe",
      "Heat-retention design"
    ]
  },
  {
    id: 16,
    name: "Leather Wallet with RFID Blocking",
    price: "₹799",
    description: "Protect your personal information with this sleek, genuine leather wallet featuring RFID-blocking technology and plenty of space for your cards and cash.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "fashion",
    rating: {
      rate: 4.5,
      count: 110
    },
    features: [
      "RFID-blocking technology",
      "Genuine leather construction",
      "Multiple card slots",
      "ID window",
      "Slim profile design"
    ]
  },
  {
    id: 17,
    name: "Adjustable Laptop Stand",
    price: "₹649",
    description: "Improve your posture and productivity with this adjustable, ergonomic laptop stand that offers multiple viewing angles and folds flat for easy transport.",
    image: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    rating: {
      rate: 4.2,
      count: 75
    },
    features: [
      "Adjustable height and angle",
      "Foldable design for portability",
      "Compatible with laptops up to 17 inches",
      "Ventilated design for heat dissipation",
      "Anti-slip silicone pads"
    ]
  },
  {
    id: 18,
    name: "Scented Soy Candle Set",
    price: "₹999",
    description: "Create a warm, inviting atmosphere with this set of three hand-poured soy candles featuring natural essential oils and cotton wicks for a clean burn.",
    image: "https://images.unsplash.com/photo-1602523069662-0b7f433b8886?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home",
    rating: {
      rate: 4.7,
      count: 120
    },
    features: [
      "Set of 3 different scents",
      "Made from 100% natural soy wax",
      "Cotton wicks for clean burning",
      "30-hour burn time per candle",
      "Reusable glass containers"
    ]
  },
  {
    id: 19,
    name: "Wireless Earbuds with Charging Case",
    price: "₹1,999",
    description: "Enjoy your favorite audio without wires using these comfortable, sweat-resistant earbuds with touch controls and a compact charging case that provides 24 hours of total playback.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    rating: {
      rate: 4.4,
      count: 190
    },
    features: [
      "Bluetooth 5.0 connectivity",
      "Touch controls",
      "IPX5 sweat and water resistance",
      "6 hours of playback per charge",
      "Compact charging case with 3 additional charges"
    ]
  }
]; 