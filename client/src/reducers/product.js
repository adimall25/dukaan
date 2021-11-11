import { GET_LOGGED_SELLER_PRODUCTS, LOGGED_SELLER_PRODUCTS_ERROR, LOGGED_SELLER_PRODUCTS_LOADED, ADD_PRODUCT, ADD_PRODUCT_ERROR, PRODUCT_ADDED, GET_PRODUCT_USING_ID, PRODUCT_LOADED_USING_ID, PRODUCT_ERROR_USING_ID, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCT_DELETED, DELETE_PRODUCT_ERROR } from "../actions/types";

const initialState = {
    products : [],
    product : null,
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
        case GET_PRODUCT_USING_ID:
        case UPDATE_PRODUCT:
        case DELETE_PRODUCT:
            return {...state, loading: true}
        
        case LOGGED_SELLER_PRODUCTS_LOADED:
            return {...state, products : payload, loading:false}
        case PRODUCT_ADDED:
            return {
                ...state,
                products : state.products.concat([payload])
            }
        case PRODUCT_LOADED_USING_ID:
            return {...state, product : payload, loading:false}
        case PRODUCT_DELETED:
            return {
                ...state,
                product : null,
                products : state.products.filter(item => item._id !== payload.product_id),
                loading:false,
            }

        case LOGGED_SELLER_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case PRODUCT_ERROR_USING_ID:
        case DELETE_PRODUCT_ERROR:
            return {...state, loading:false, error: payload}

        default:
            return {...state}
    }
}