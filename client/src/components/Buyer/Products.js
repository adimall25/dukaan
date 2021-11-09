import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import { Banner } from './Banner';
import ItemHeading from './ItemHeading';
import Slide from './Slide';
import Header from '../Header/Header';
function Products() {
  return (
    <Fragment>
      <Header />
      <ItemHeading />
      <Banner />
      <Slide />
      <Slide title="Suggested items" />
      <Slide title="Recommended for you " />
      <Slide title="Discounts for you" />
      <Slide title="Discounts for you" />
    </Fragment>
  );
}

export default Products;
