import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom"
import Profiles from '../Profiles/Profiles';
import Navbar from '../Navbar';
import {connect} from "react-redux";
import { getLoggedInBuyer } from '../../actions/profile';
import Spinner from "../Spinner"
import '../../css/Landing.css';
import { orange } from '@mui/material/colors';
const BuyerHomePage = ({getLoggedInBuyer, profile}) => {
  // useEffect(() => {
  //   getLoggedInBuyer()
  // }, [getLoggedInBuyer])

  return (
    profile.loading ? <Spinner /> : (
      <div style={{backgroundColor: orange}}>
      <Navbar />
      <Profiles />
    </div>
    ) 
    
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
