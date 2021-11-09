import { GET_LOGGED_SELLER_PRODUCTS, LOGGED_SELLER_PRODUCTS_ERROR, LOGGED_SELLER_PRODUCTS_LOADED } from "../actions/types";

const initialState = {
    products : [],
    loading : false,
    error : {}
}

export default function(state = initialState, action)
{
    const {type, payload} = action;

    switch(type)
    {
        case GET_LOGGED_SELLER_PRODUCTS:
            return {...state, loading: true}
        
        case LOGGED_SELLER_PRODUCTS_LOADED:
            return {...state, products : payload, loading:false}
        
        case LOGGED_SELLER_PRODUCTS_ERROR:
            return {...state, loading:false, error: payload}

        default:
            return {...state}
    }
}