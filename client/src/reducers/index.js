import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"
import auth from "./auth"
import profile from "./profile";
import order from "./order"

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth', 'profile', 'order']
}

const rootReducer = combineReducers({
    auth,
    profile,
    order
})

export default persistReducer(persistConfig, rootReducer)