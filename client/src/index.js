import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Provider} from 'react-redux';
import {store, persistor} from "./store.js";
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <PersistGate persistor = {persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);