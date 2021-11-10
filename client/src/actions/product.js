import { GET_LOGGED_SELLER_PRODUCTS,LOGGED_SELLER_PRODUCTS_LOADED, LOGGED_SELLER_PRODUCTS_ERROR, ADD_PRODUCT, PRODUCT_ADDED, ADD_PRODUCT_ERROR  } from "./types"
import axios from "axios"


export const getLoggedInSellerProducts = () => {
    return async (dispatch) => {

        try
        {
            dispatch({
                type : GET_LOGGED_SELLER_PRODUCTS
            })
    
            const res = await axios.get("http://localhost:5000/api/products/me", {
                headers : {
                    'x-auth-token' : localStorage.getItem('seller-token')
                }
            })
    
            dispatch({
                type : LOGGED_SELLER_PRODUCTS_LOADED,
                payload : res.data.sellerProducts
            })
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : LOGGED_SELLER_PRODUCTS_ERROR,
                payload : err
            })
        }
        
    }
}

export function addProduct({productData, history})
{
    return async(dispatch) => {

        try
        {
            dispatch({
                type : ADD_PRODUCT
            })
    
            const body = {
                productData
            }
    
            const res = await axios.post("http://localhost:5000/api/products/add", body, {
                headers : {
                    'x-auth-token' : localStorage.getItem('seller-token')
                }
            })
    
            dispatch({
                type : PRODUCT_ADDED,
                payload : res.data.product
            })
    
            history.push('/seller/home')
        }
        catch(err)
        {
            dispatch({
                type:ADD_PRODUCT_ERROR,
                payload: err
            })
        }
        
    }
}