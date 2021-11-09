import {CREATE_ORDER, ORDER_CREATED, GET_SELLER_ORDERS, BUYER_ORDERS_LOADED, BUYER_ORDERS_ERROR, SELLER_ORDERS_LOADED, CREATE_ORDER_ERROR, SELLER_ORDERS_ERROR, GET_BUYER_ORDERS, UPDATE_ORDER_STATUS, ORDER_STATUS_UPDATED} from "../actions/types"

const initialState = {
    loading: false,
    orders : [],
    error : {}
}

export default function(state = initialState, action)
{
    const {type, payload} = action

    switch(type)
    {
        case CREATE_ORDER:
        case GET_BUYER_ORDERS:
        case GET_SELLER_ORDERS:
        case UPDATE_ORDER_STATUS:
            return {...state, loading: true}

        case ORDER_CREATED:
            return {...state, loading: false, orders: state.orders.push(payload)}
        
        case CREATE_ORDER_ERROR:
        case SELLER_ORDERS_ERROR:
        case BUYER_ORDERS_ERROR:
            return {...state, loading:false, error: payload}
        
        case SELLER_ORDERS_LOADED:
        case BUYER_ORDERS_LOADED:
            return {...state, loading:false, orders : payload}

        case ORDER_STATUS_UPDATED:
            return {...state, loading:false, orders : state.orders.map((el) => {
                if(el._id === payload._id)return payload
                else return el
            })}
        
        default:
            return {...state}
    }
}