import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />

      {/* Product name */}
      <h3 className="product-title">{product.name}</h3>

      {/* Product description */}
      <p className="product-description">{product.description}</p>

      {/* Product price */}
      <p className="product-price">Price: ₹{product.price}</p>

      {/* Action button */}
      <button className="add-to-cart-btn" onClick={() => alert(`${product.name} added to cart!`)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
