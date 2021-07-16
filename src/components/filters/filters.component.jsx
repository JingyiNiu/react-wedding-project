import React, { useState } from "react";
import DisplayContainer from "../display-container/display-container.component";

import data from "../../data";

import "./filters.styles.scss";

const Filters = () => {
  const [products, setProducts] = useState(data);

  const filterByCategory = () => {
    const category = document.querySelector("#category").value;
    if (category == "0") {
      setProducts(data);
    } else {
      const productsCategory = data.filter(
        (product) => product.categoryId == category
      );
      setProducts(productsCategory);
    }
    resetPriceFilter();
    resetSortByFilter();
  };

  const filterByPriceAndCategory = () => {
    const priceRange = document.querySelector("#price").value;
    const category = document.querySelector("#category").value;
    let productsByPriceAndCategory;
    if (category == "0") {
      switch (priceRange) {
        case "all":
          productsByPriceAndCategory = data;
          break;
        case "0-100":
          productsByPriceAndCategory = data.filter(
            (product) => product.price <= 100
          );
          break;
        case "101-500":
          productsByPriceAndCategory = data.filter(
            (product) => product.price > 100 && product.price <= 500
          );
          break;
        case "501-1000":
          productsByPriceAndCategory = data.filter(
            (product) => product.price > 500 && product.price <= 1000
          );
          break;
        case "1000+":
          productsByPriceAndCategory = data.filter(
            (product) => product.price > 1000
          );
          break;
        default:
          break;
      }
    } else {
      switch (priceRange) {
        case "all":
          productsByPriceAndCategory = data.filter(
            (product) => product.categoryId == category
          );
          break;
        case "0-100":
          productsByPriceAndCategory = data.filter(
            (product) => product.price <= 100 && product.categoryId == category
          );
          break;
        case "101-500":
          productsByPriceAndCategory = data.filter(
            (product) =>
              product.price > 100 &&
              product.price <= 500 &&
              product.categoryId == category
          );
          break;
        case "501-1000":
          productsByPriceAndCategory = data.filter(
            (product) =>
              product.price > 500 &&
              product.price <= 1000 &&
              product.categoryId == category
          );
          break;
        case "1000+":
          productsByPriceAndCategory = data.filter(
            (product) => product.price > 1000 && product.categoryId == category
          );
          break;
        default:
          break;
      }
    }
    setProducts(productsByPriceAndCategory);
  };

  const sort = () => {
    const sortBy = document.querySelector("#sort-by").value;
    if (sortBy == "lowtohigh") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy == "hightolow") {
      products.reverse((a, b) => a.price - b.price);
    } else {
      console.log("something wrong with sort function");
    }
    console.log(products[0].price)
    setProducts(products)
  };

  function resetPriceFilter() {
    const priceValue = document.querySelector("#price");
    priceValue.selectedIndex = 0;
  }

  function resetSortByFilter() {
    const soryByValue = document.querySelector("#sort-by");
    soryByValue.selectedIndex = 0;
  }

  return (
    <div className='wrap'>
      <div className='filters'>
        <div className='catogory-filter'>
          <div className='filter-label'>Category</div>
          <select className='form-select' id='category'>
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
          <button className='button' onClick={filterByCategory}>
            Show
          </button>
        </div>

        <div className='price-filter'>
          <div className='filter-label'>Price</div>
          <select className='form-select' id='price'>
            <option value='all'>All</option>
            <option value='0-100'>0 - 100</option>
            <option value='101-500'>101 - 500</option>
            <option value='501-1000'>501 - 1000</option>
            <option value='1000+'>&gt; 1000</option>
          </select>
          <button className='button' onClick={filterByPriceAndCategory}>
            Filter
          </button>
        </div>

        <div className='ordering-filter'>
          <select className='form-select' id='sort-by' onChange={sort}>
            <option value='default'>Sort by</option>
            <option value='lowtohigh'>Price Low to High</option>
            <option value='hightolow'>Price High to Low</option>
          </select>
        </div>
      </div>
      <DisplayContainer products={this.state} />
    </div>
  );
};

export default Filters;
