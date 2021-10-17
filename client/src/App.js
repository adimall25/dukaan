import React, {Fragment} from "react";
import Landing from "./components/Landing";
import BuyerHomePage from "./components/Home/BuyerHomePage"
import SellerHomePage from "./components/Home/SellerHomePage"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/buyer/home" component={BuyerHomePage} />
          <Route exact path="/seller/home" component={SellerHomePage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
