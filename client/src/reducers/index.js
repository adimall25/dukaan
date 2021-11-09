import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"
import auth from "./auth"
import profile from "./profile";
import order from "./order"
import product from "./product"

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth', 'profile', 'order', 'product']
}

const rootReducer = combineReducers({
    auth,
    profile,
    order,
    product
})

export default persistReducer(persistConfig, rootReducer)