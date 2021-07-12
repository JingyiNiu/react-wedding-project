import React from "react";
import { useState, useEffect } from "react";

import Button from "../button/button.component";
import { useParams } from "react-router-dom";
import products from "../../data";

import "./product-details.styles.scss";

const ProductDetails = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    products.forEach((product) => {
      if (product.prodId == id) {
        setItem(product);
      }
    });
  };

  console.log(item);
  console.log(item.productMedia[0].url);

  return (
    <div className='wrap'>
      <Button href='/' text='BACK' />
      <div className='details-container'>
        <div className='details-img'>
          <img
            src="111"
            alt='product'
          />
        </div>
        <div className='details-content'>
          <div className='details-name'>{item.title}</div>
          <div className='details-text'>
            <p>Price: {item.price}</p>
            <p>ID: {item.prodId}</p>
            <p>Description:</p>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
