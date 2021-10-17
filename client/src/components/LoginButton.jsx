import React, { Fragment } from 'react';
import { GoogleLogin } from 'react-google-login'; //for google login button component
import axios from 'axios';
import { useHistory } from 'react-router';

import setCookie from '../utils/cookies/setCookie';

function LoginButton({ type, buttonText }) {
  let history = useHistory();
  //function called if google authentication is successful
  async function onSuccess(res) {
    //set payload to send to server
    const payload = { tokenId: res.tokenId };

    //if seller, then send to this route, else other route
    if (type === 'seller') {
      const response = await axios.post(
        'http://localhost:5000/api/auth/seller/signin',
        payload
      );
      console.log(response);
      if (response.status === 200) {
        setCookie('seller-token', response.data.token);
        history.push('/seller/profile');
      }
    } else if (type === 'buyer') {
      const response = await axios.post(
        'http://localhost:5000/api/auth/buyer/signin',
        payload
      );
      console.log(response);
      if (response.status === 200) {
        setCookie('buyer-token', response.data.token);
        history.push('/buyer/profile');
      }
    } else {
      console.log('Wrong user type');
    }
  }

  //function called if google authentication fails
  function onFailure(res) {
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

export default LoginButton;
