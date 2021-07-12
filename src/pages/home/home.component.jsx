import React from "react";
import products from "../../data";
import ProductPriview from "../../components/product-preview/product-preview.component";

import "./home.styles.scss";

const Home = () => {
  console.log(products);

  return (
    <div className='wrap'>
      <div className='home'>
        {products.map((product) => {
          if (product.productMedia[0] && product.productMedia[0].url) {
            return (
              <ProductPriview
                key={product.prodId}
                imgUrl={`https://storage.googleapis.com/luxe_media/wwwroot/${product.productMedia[0].url}`}
                name={product.title}
                price={product.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
