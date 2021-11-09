import React, {useEffect,} from 'react';
import {Redirect, Link} from "react-router-dom"
import Profiles from '../Profiles/Profiles';
import Navbar from '../Navbar';
import {connect} from "react-redux";
import { getLoggedInBuyer } from '../../actions/profile';
import Spinner from "../Spinner"
import '../../css/Landing.css';
import { orange } from '@mui/material/colors';
import { Fragment } from 'react';
const BuyerHomePage = ({getLoggedInBuyer, profile : {loading, buyerProfile}}) => {
  useEffect(() => {
    getLoggedInBuyer()
  }, [getLoggedInBuyer])

  return (
    loading && buyerProfile === null ? <Spinner /> : 
      buyerProfile !== null ? <Fragment><div>
      <Navbar />
      <Profiles /> 
    </div></Fragment> : <Fragment><div>You have not created your profile. Click 
    <Link to ="/buyer/profile"> here</Link> to create your profile</div></Fragment>
    
    
  );
};

const mapStateToProps = (state) => {
  return {
    profile : state.profile,
    auth : state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedInBuyer : () => dispatch(getLoggedInBuyer())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(BuyerHomePage);
