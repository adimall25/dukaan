import { GET_LOGGED_SELLER_PRODUCTS, LOGGED_SELLER_PRODUCTS_ERROR, LOGGED_SELLER_PRODUCTS_LOADED, ADD_PRODUCT, ADD_PRODUCT_ERROR, PRODUCT_ADDED } from "../actions/types";

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
        case ADD_PRODUCT:
        case GET_LOGGED_SELLER_PRODUCTS:
            return {...state, loading: true}
        
        case LOGGED_SELLER_PRODUCTS_LOADED:
            return {...state, products : payload, loading:false}
        case PRODUCT_ADDED:
            return {
                ...state,
                products : state.products.concat([payload])
            }
        
        case LOGGED_SELLER_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return {...state, loading:false, error: payload}

        default:
            return {...state}
    }
}