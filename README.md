# IndiBazaar E-commerce Frontend

A modern e-commerce frontend application built with React, TypeScript, and Material UI.

## Features

- 🎨 Responsive design for all device sizes
- 📱 Mobile-friendly interface
- 🛒 Shopping cart functionality with persistent state
- 📦 Product catalog with filtering and sorting options
- 🔍 Product search and detailed product pages
- 💳 Multi-step checkout process
- 🌈 Modern, visually appealing UI with Material Design

## Tech Stack

- React 18
- TypeScript
- Material UI
- React Router
- Context API for state management
- Vite for fast development and building

## Screenshots

*Coming soon*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/indibazaar.git
   cd indibazaar
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Production Build

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be located in the `dist` directory, which can be deployed to your preferred hosting service.

## Project Structure

```
indibazaar/
├── public/          # Static files
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── data/        # Mock data
│   ├── utils/       # Utility functions and hooks
│   ├── App.tsx      # Main app component with routing
│   └── main.tsx     # Entry point
├── index.html       # HTML template
└── package.json     # Project dependencies and scripts
```

## Customization

### Theming

The application uses Material UI's theming system. You can customize the theme in `src/App.tsx` by modifying the theme object.

### Products

Product data is currently stored in `src/data/products.ts`. You can modify this file to add, remove, or update products.

## Future Enhancements

- Integration with a backend API
- User authentication
- Wishlist functionality
- Product reviews
- Order history
- Admin dashboard

## License

MIT

## Acknowledgments

- [Material UI](https://mui.com/) for the UI components
- [Unsplash](https://unsplash.com/) for product images
- [React Router](https://reactrouter.com/) for routing
