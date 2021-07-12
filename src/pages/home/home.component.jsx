import React from "react";
import ProductPriview from "../../components/product-preview/product-preview.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className='wrap'>
      <div className='home'>
        <ProductPriview 
        imgUrl='https://images.unsplash.com/photo-1543213324-024b81adc95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80'
        name='product name'
        price='10'/>
      </div>
    </div>
  );
};

export default Home;
