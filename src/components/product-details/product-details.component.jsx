import React from "react";
import { useState, useEffect } from "react";

import Button from "../button/button.component";
import { useParams } from "react-router-dom";
import products from "../../data";

import "./product-details.styles.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.filter((product) => product.prodId == id);

  console.log(product);

  return (
    <div className='wrap'>
      <Button href='/' text='BACK' />
      <div className='details-container'>
        <div className='details-img'>
          <img src={`https://storage.googleapis.com/luxe_media/wwwroot/${product[0].productMedia[0].url}`} alt='product' />
        </div>
        <div className='details-content'>
          <div className='details-name'>{product[0].title}</div>
          <div className='details-text'>
            <p>Price: ${product[0].price}</p>
            <p>ID: {product[0].prodId}</p>
            <p>Description:</p>
            <p>{product[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
