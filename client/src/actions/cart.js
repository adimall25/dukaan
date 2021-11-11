import { ADDED_TO_CART, ADD_TO_CART, ADD_TO_CART_ERROR, BUYER_CART_LOADED, GET_BUYER_CART, GET_BUYER_CART_ERROR } from "./types";
import axios from "axios";

export function getBuyerCart()
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : GET_BUYER_CART
            })

            const res = await axios.get("http://localhost:5000/api/cart/me", {
                headers : {
                    'x-auth-token' : localStorage.getItem('buyer-token')
                }
            })

            dispatch({
                type : BUYER_CART_LOADED,
                payload: res.data.cart
            })
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : GET_BUYER_CART_ERROR,
                payload : err
            })
        }
    }
}

export function addToCart({product_id, history})
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : ADD_TO_CART
            })
    
            const res = await axios.post(`http://localhost:5000/api/cart/${product_id}`, null, {
                headers : {
                    'x-auth-token' : localStorage.getItem('buyer-token')
                }
            })
    
            dispatch({
                type : ADDED_TO_CART,
                payload : res.data.cart
            })

            history.push("/buyer/home");
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : ADD_TO_CART_ERROR,
                payload : err
            })
        }
        
    } 
}