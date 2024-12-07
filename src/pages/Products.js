import React from 'react';
import ProductCard from '../components/ProductCard'; // Reusable ProductCard component
import backgroundImage from '../assets/background.jpg'; // Background image
import productImage1 from '../assets/1.jpg'; // Product image 1
import productImage2 from '../assets/5.jpg'; // Product image 2
import bagImage1 from '../assets/3.jpeg'; // Bag image 1
import bagImage2 from '../assets/8.jpeg'; // Bag image 2
import blanketImage1 from '../assets/6.jpeg'; // Blanket image

const Products = () => {
  // Product data array
  const products = [
    {
      id: 1,
      name: 'Handloom Saree',
      price: 2500,
      description: 'A beautiful handloom saree.',
      imageUrl: productImage1,
    },
    {
      id: 2,
      name: 'Handwoven Scarf',
      price: 1200,
      description: 'A warm handwoven scarf.',
      imageUrl: productImage2,
    },
    {
      id: 3,
      name: 'Handloom Bag - Floral Design',
      price: 2500,
      description: 'A beautiful handloom bag with floral designs.',
      imageUrl: bagImage1,
    },
    {
      id: 4,
      name: 'Handloom Bag - Geometric Design',
      price: 3000,
      description: 'A stylish handloom bag with geometric patterns.',
      imageUrl: bagImage2,
    },
    {
      id: 5,
      name: 'Handloom Blanket - Warm and Cozy',
      price: 4500,
      description: 'A soft handloom blanket perfect for cold nights.',
      imageUrl: blanketImage1,
    },
  ];

  // Styling for the section
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    minHeight: '100vh', // Ensures full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#333',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#3d5a80' }}>
        Our Products
      </h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
