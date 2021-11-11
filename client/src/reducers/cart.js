import { ADDED_TO_CART, ADD_TO_CART, ADD_TO_CART_ERROR, GET_BUYER_CART, BUYER_CART_LOADED, GET_BUYER_CART_ERROR } from "../actions/types";


const initialState = {
    loading : false,
    products : [],
    error:{}
}


export default function(state = initialState, action)
{
    const {type, payload} = action;

    switch(type)
    {
        case ADD_TO_CART:
        case GET_BUYER_CART:
            return {...state, loading: true};
        case ADDED_TO_CART:
        case BUYER_CART_LOADED:
            return {...state, products : payload, loading:  false};
        case ADD_TO_CART_ERROR:
        case GET_BUYER_CART_ERROR:
            return {...state, loading: false, error : payload}
        default:
            return {...state}
    }
}