import axios from "axios"
import {CREATE_ORDER, ORDER_CREATED, ORDER_CREATION_ERROR, GET_SELLER_ORDERS, BUYER_ORDERS_LOADED, BUYER_ORDERS_ERROR, SELLER_ORDERS_LOADED, CREATE_ORDER_ERROR, SELLER_ORDERS_ERROR, GET_BUYER_ORDERS, UPDATE_ORDER_STATUS, ORDER_STATUS_UPDATED} from "../actions/types"

export const createOrder = ({orderDetails}) => {
    return async (dispatch) => {
        try
        {
            dispatch({
                type : CREATE_ORDER
            })

            const body = {
                order : orderDetails
            }

            const res = await axios.post("http://localhost:5000/api/orders/create", body)

            dispatch({
                type:ORDER_CREATED,
                payload: res.data.order
            })

        }
        catch(err)
        {
            console.log(err)
            dispatch({
                type : CREATE_ORDER_ERROR,
                payload: err
            })
        }
    }
}

export const getSellerOrders = () => {
    return async (dispatch) => {
        try
        {
            dispatch({
                type : GET_SELLER_ORDERS
            })

            const config = {
                headers : {
                    'x-auth-token' : localStorage.getItem('seller-token')
                }
            }

            const res = await axios.get("http://localhost:5000/api/orders/seller/me", config)

            dispatch({
                type : SELLER_ORDERS_LOADED,
                payload: res.data.orders
            })

        }
        catch(err)
        {
            console.log(err)
            dispatch({
                type: SELLER_ORDERS_ERROR,
                payload: err
            })
        }
    }
}