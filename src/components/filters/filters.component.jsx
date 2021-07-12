import React, { useState, useEffect } from "react";
import DisplayContainer from "../display-container/display-container.component";

import data from "../../data";

import "./filters.styles.scss";

const Filters = () => {
  const [products, setProducts] = useState(data);

  const fitlerByCategory = (e) => {
    const category = e.target.previousElementSibling.value;
    const productsFlitered = data.filter(
      (product) => product.categoryId == category || category == "0"
    );
    setProducts(productsFlitered);
  };

  return (
    <div className='wrap'>
      <div className='filters'>
        <div className='catogory-filter'>
          <div className='filter-label'>Category</div>
          <select className='category form-select'>
            <option value='0'>All Hires</option>
            <option value='1'>ARCHES & BALLOON/FLOWER STANDS</option>
            <option value='2'>CARTS</option>
            <option value='3'>PARTY HIRE</option>
            <option value='5'>TABLEWARE</option>
            <option value='25'>LED LETTER & NUMBER LIGHTS</option>
            <option value='11'>CENTREPIECE HIRE - CANDLES & VASES</option>
            <option value='15'>BACKDROPS & FLOWER WALLS</option>
            <option value='21'>CAKE & DESSERT STANDS</option>
            <option value='18'>TABLES & CONSOLES</option>
            <option value='12'>PLINTHS</option>
            <option value='27'>TABLECLOTHS</option>
            <option value='16'>CHAIRS</option>
            <option value='20'>WOODEN CRATES</option>
            <option value='51'>MIRRORS</option>
            <option value='14'>WEDDING HIRE</option>
            <option value='10'>BABY SHOWER</option>
            <option value='47'>Luxe Dream Wedding Flowers</option>
            <option value='49'>Luxe Dream Floral Studio</option>
          </select>
          <button className='button' onClick={fitlerByCategory}>
            Show
          </button>
        </div>

        <div className='price-filter'>
          <div className='filter-label'>Price</div>
          <select className='price form-select'>
            <option value='all'>All</option>
            <option value='0-100'>0 - 100</option>
            <option value='101-500'>101 - 500</option>
            <option value='501-1000'>501 - 1000</option>
            <option value='1000+'>&gt; 1000</option>
          </select>
          <button className='button'>Filter</button>
        </div>

        <div className='ordering-filter'>
          <select className='sort-by form-select'>
            <option value='default'>Sort by</option>
            <option value='lowtohigh'>Price Low to High</option>
            <option value='hightolow'>Price High to Low</option>
          </select>
        </div>
      </div>
      <DisplayContainer products={products} />
    </div>
  );
};

export default Filters;
