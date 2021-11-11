import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"
import auth from "./auth"
import profile from "./profile";
import order from "./order"
import product from "./product"
import cart from "./cart";

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth', 'profile', 'order', 'product', 'cart']
}

const rootReducer = combineReducers({
    auth,
    profile,
    order,
    product,
    cart
})

export default persistReducer(persistConfig, rootReducer)