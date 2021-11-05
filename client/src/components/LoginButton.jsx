import React, { Fragment } from 'react';
import { GoogleLogin } from 'react-google-login'; //for google login button component
import axios from 'axios';
import { useHistory } from 'react-router';
import { getLoggedInBuyer, getLoggedInSeller } from '../service/api';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { loginBuyer, loginSeller } from '../actions/auth';


function LoginButton({ type, buttonText, loginBuyer, loginSeller }) 
{
  let history = useHistory();

  //function called if google authentication is successful
  async function onSuccess(res) 
  {
    //if seller, then send to this route, else other route
    if (type === 'seller') 
    {
      //Dispatch action LOGIN_SELLER, pass google token 
      loginSeller({googleToken : res.tokenId, history})
    } 
    else if (type === 'buyer') 
    {
      //Dispatch action LOGIN_BUYER, pass google token 
      loginBuyer({googleToken : res.tokenId, history})
      
    } 
    else 
    {
      console.log('Wrong user type');
    }
  }

  //function called if google authentication fails
  function onFailure(res) 
  {
    console.log('failure!');
  }
  return (
    <Fragment>
      <GoogleLogin
        clientId="997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com"
        buttonText={buttonText}
        theme="dark"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginBuyer: (obj) => dispatch(loginBuyer(obj)),
      loginSeller: (obj) => dispatch(loginSeller(obj))
  }
}
export default connect(null, mapDispatchToProps)(LoginButton);