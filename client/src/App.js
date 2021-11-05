import React, { Fragment, useEffect } from 'react';
import Landing from './components/Landing';
import BuyerHomePage from './components/Home/BuyerHomePage';
import SellerHomePage from './components/Home/SellerHomePage';
import BuyerProfile from './components/Profiles/BuyerProfile';
import SellerProfile from './components/Profiles/SellerProfile';
import Profiles from './components/Profiles/Profiles';
import './css/Styles.css';
import AddProduct from './components/Products/AddProduct';
import getCookie from './utils/cookies/getCookie';
import setCookie from './utils/cookies/setCookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Buyer/Products';

//redux
import {Provider} from 'react-redux';
import store from "./store.js";

function App() {
  // useEffect(() => {
  //   if(getCookie('buyer-token'))
  //   {
  //     store.getState
  //   }
  //   else if(getCookie('seller-token'))
  //   {

  //   }
  //   else;
  // }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/buyer/home" component={BuyerHomePage} />
            <Route exact path="/buyer/home/products" component={Products} />
            <Route exact path="/buyer/profile" component={BuyerProfile} />
            <Route exact path="/seller/profile" component={SellerProfile} />
            <Route exact path="/seller/products/add" component={AddProduct} />
            <Route exact path="/seller/home" component={SellerHomePage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
