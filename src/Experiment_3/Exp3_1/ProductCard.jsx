import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, inStock, image }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image-placeholder">
          {image ? (
            <img src={image} alt={title} className="product-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <span className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;