import React from "react";

import Filters from "../../components/filters/filters.component";
import Filter from "../../components/filter/filter.components";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className='wrap'>
      <Filters />
    </div>
  );
};

export default Home;
