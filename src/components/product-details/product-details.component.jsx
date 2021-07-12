import React from "react";

import "./product-details.styles.scss";

const ProductDetails = () => {
  return (
    <div className='details-container'>
      <div className='details-img'>
        <img
          src='https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
          alt='product'
        />
      </div>
      <div className='details-content'>
        <div className='details-name'>name</div>
        <div className='details-text'>
          <p>price</p>
          <p>id</p>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
