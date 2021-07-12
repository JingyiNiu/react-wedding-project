import React from "react";
import { Link } from "react-router-dom";

import products from "../../data";
import ProductPriview from "../../components/product-preview/product-preview.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className='wrap'>
      <div className='home'>
        {products.map((product) => {
          if (product.productMedia[0] && product.productMedia[0].url) {
            return (
              <Link to={`/details/${product.prodId}`} key={product.prodId}>
                <ProductPriview
                  imgUrl={`https://storage.googleapis.com/luxe_media/wwwroot/${product.productMedia[0].url}`}
                  name={product.title}
                  price={product.price}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
