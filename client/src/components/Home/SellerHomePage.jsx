import React, {useEffect, Fragment} from 'react';
import Sidebar from '../Dashboard/Sidebar';
import '../../css/Styles.css';
import {connect} from "react-redux";
import { getLoggedInSeller } from '../../actions/profile';
import { loadSeller } from '../../actions/auth';
import Spinner from '../Spinner';
import {Link} from "react-router-dom"

function SellerHomePage({getLoggedInSeller, profile : {loading, sellerProfile}}) {

  useEffect(() => {
    getLoggedInSeller()
  }, [getLoggedInSeller])

  return (
    loading && sellerProfile === null ? <Spinner /> : 
      sellerProfile !== null ? <Fragment><div className="App">
      <Sidebar />
    </div></Fragment> : <Fragment><div>You have not created your profile. Click 
      <Link to ="/seller/profile"> here</Link> to create your profile</div></Fragment>
    
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedInSeller : () => dispatch(getLoggedInSeller()),
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SellerHomePage);
