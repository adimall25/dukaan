import { GET_LOGGED_SELLER_PRODUCTS,LOGGED_SELLER_PRODUCTS_LOADED, LOGGED_SELLER_PRODUCTS_ERROR  } from "./types"
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