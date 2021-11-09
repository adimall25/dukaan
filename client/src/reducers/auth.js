import {LOGIN_BUYER, LOGIN_SELLER, BUYER_LOGIN_SUCCESS, SELLER_LOGIN_SUCCESS, BUYER_LOGIN_FAIL, SELLER_LOGIN_FAIL, BUYER_LOGOUT, BUYER_ACCOUNT_DELETED, SELLER_LOGOUT, SELLER_ACCOUNT_DELETED, SELLER_LOAD_ERROR, LOAD_SELLER, SELLER_LOADED} from "../actions/types.js";

const initialState = {
    sellerToken:null,
    buyerToken : null,
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
        case LOAD_SELLER:
            return {...state, loading:true}
        case BUYER_LOGIN_SUCCESS:
            localStorage.setItem('buyer-token', action.payload.token);
            return {...state, buyerToken : action.payload.token, loading:false, buyer: action.payload.buyer, isBuyerAuthenticated : true}
        case SELLER_LOGIN_SUCCESS:
            localStorage.setItem('seller-token', action.payload.token);
            return {...state, sellerToken : action.payload.token, loading:false, seller: action.payload.seller, isSellerAuthenticated : true}
        case SELLER_LOADED:
            return {...state, sellerToken : localStorage.getItem('seller-token'), loading: false, seller : action.payload.seller, isSellerAuthenticated : true}
        case SELLER_LOAD_ERROR: 
            return {...state, loading:false, error : action.payload.error}
        case BUYER_LOGIN_FAIL:
            localStorage.removeItem('buyer-token');
            return {...state, buyerToken:null, isBuyerAuthenticated: false, loading:false, buyer: null};
        
        case SELLER_LOGIN_FAIL:
            localStorage.removeItem('seller-token');
            return {...state, sellerToken:null, isSellerAuthenticated: false, loading:false, seller : null};

        case BUYER_LOGOUT:
        case BUYER_ACCOUNT_DELETED:
            localStorage.removeItem('buyer-token');
            return {...state, isBuyerAuthenticated:false, buyer:null, loading: false, buyerToken:null};

        case SELLER_LOGOUT:
            case SELLER_ACCOUNT_DELETED:
                localStorage.removeItem('seller-token');
                return {...state, isSellerAuthenticated:false, seller:null, loading: false, sellerToken:null};

        default:
            return {...state};
    }
}