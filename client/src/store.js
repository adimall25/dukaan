import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";


const initialState = {};
const middleware = [thunk]; //list of middlewares 


export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
