import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correct import statement
import "./style.css";

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);
    const [categorytype, setCategorytype] = useState("");

    useEffect(() => {
      let category = "category";
      if (categorytype === "") {
         category = "";
      }
      axios.get(`https://fakestoreapi.com/products/${category}/${categorytype}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }, [categorytype]);

    const handleChange = event => {
      setCategorytype(event.target.value);
    };
  
    return (
      <div className="product-section">
        <div className='select-options'>
          <h1 className='products-page-heading'>Products</h1>
          <select onChange={handleChange}>
            <option value="">All</option>
            <option key="jewelery" value="jewelery">Jewellery</option>
            <option key="electronics" value="electronics">Electronics</option>
            <option key="men's clothing" value="men's clothing">Men's Clothing</option>
            <option key="women's clothing" value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div className="product-container">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link className='link' to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <p className="product-title">{product.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ProductsGrid;
