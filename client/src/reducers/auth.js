import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACCOUNT_DELETED} from "../actions/types.js";

const initialState = {
    sellerToken:localStorage.getItem('seller-token'),
    buyerToken : localStorage.getItem('buyer-token'),
    isBuyerAuthenticated: false,
    isSellerAuthenticated: false,
    loading: false,
    buyer:null,
    seller :null,
    error : []
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_BUYER:
        case LOGIN_SELLER:
            return {...state, loading:true}
        case BUYER_REGISTER_SUCCESS:
        case BUYER_LOGIN_SUCCESS:
            localStorage.setItem('buyer-token', action.payload.token);
            return {...state, buyerToken : action.payload.token, loading:false}
        
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {...state, token:null, isAuthenticated: false, loading:false};
        
        case BUYER_LOADED:
            return {...state, isAuthenticated:true, loading:false, user: action.payload} 
        case SELLER_LOADED:
            return {...state, isAuthenticated: true, loading: false, seller: action.payload}
        
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {...state, isAuthenticated:false, loading:false, user:null, token:null};
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token');
            return {...state, isAuthenticated:false, user:null, loading: false, token:null};
        default:
            return {...state};
    }
}