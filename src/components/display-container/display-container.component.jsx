import React from 'react';
import { Link } from 'react-router-dom';
import ProductPriview from "../../components/product-preview/product-preview.component";

import "./display-container.styles.scss"

const DisplayContainer = ({products}) => {
    return (
        <div className='display-container'>
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
          } else {
            return null;
          }
        })}
        </div>
    )
}

export default DisplayContainer
