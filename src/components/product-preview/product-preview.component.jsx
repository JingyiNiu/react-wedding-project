import React from "react";
import "./product-preview.styles.scss";

const ProductPriview = ({imgUrl, name, price}) => {
  return (
    <div className='preview-item'>
      <div className='preview-img'>
        <img src={imgUrl} alt='image' />
      </div>
      <div className='preview-content'>
      <h3>{name}</h3>
      <p>price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductPriview;
