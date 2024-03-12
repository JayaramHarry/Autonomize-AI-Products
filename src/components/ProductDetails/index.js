import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react'; // Import useParams from react-router-dom
import "./style.css";

const ProductDetails = () => { // Remove props from function parameters
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
  
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);
  
    return (
      <div className="product-details">
        <h1>Your choice</h1>
        {product ? (
          <div className="productdetails">
            <img  src={product.image} alt={product.title} />
            <div className="eachCard">
              <h2>{product.title}</h2>
              <p className="desc">{product.description}</p>
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
