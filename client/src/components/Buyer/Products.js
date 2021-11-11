import React, { Fragment, useEffect } from 'react';
import Navbar from '../Navbar';
import { Banner } from './Banner';
import ItemHeading from './ItemHeading';
import Slide from './Slide';
import Header from '../Header/Header';
import {getSellerProfiles} from "../../actions/profile"
import {connect} from "react-redux";

function Products({getSellerProfiles, profile}) {

  useEffect(() => {
    getSellerProfiles();
  }, [getSellerProfiles])

  return (

    <Fragment>
      <Header />
      <ItemHeading />
      <Banner />
      {profile.sellerProfiles.map((sellerProfile, index) => {
        return <Slide key={index} sellerProfile={sellerProfile} title={sellerProfile.shopName}></Slide>
      })}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    profile : state.profile
  }
}

export default connect(mapStateToProps, {getSellerProfiles})(Products);
