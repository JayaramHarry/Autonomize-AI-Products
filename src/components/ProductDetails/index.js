import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./style.css";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
  
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);
  
    return (
      <div className="product-details-container">
        <h1>Your choice</h1>
        {product ? (
          <div className="product-details">
            <img  src={product.image} alt={product.title} />
            <div className="product-card">
              <h2 className='product-title'>{product.title}</h2>
              <p className="product-desc">{product.description}</p>
              <p className="price">Price: ${product.price}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default ProductDetails;
