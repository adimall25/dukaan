import { GET_LOGGED_SELLER_PRODUCTS,LOGGED_SELLER_PRODUCTS_LOADED, LOGGED_SELLER_PRODUCTS_ERROR, ADD_PRODUCT, PRODUCT_ADDED, ADD_PRODUCT_ERROR, PRODUCT_LOADED_USING_ID, PRODUCT_ERROR_USING_ID, GET_PRODUCT_USING_ID, UPDATE_PRODUCT, PRODUCT_UPDATED, UPDATE_PRODUCT_ERROR, DELETE_PRODUCT, PRODUCT_DELETED, DELETE_PRODUCT_ERROR, GET_ALL_SELLERS_PRODUCTS } from "./types"
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

export function getProductUsingId(product_id)
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : GET_PRODUCT_USING_ID
            })

            const res = await axios.get(`http://localhost:5000/api/products/product/${product_id}`)

            dispatch({
                type : PRODUCT_LOADED_USING_ID,
                payload: res.data.product
            })
        }
        catch(err)
        {
            console.log(err)
            dispatch({
                type : PRODUCT_ERROR_USING_ID,
                payload: err
            })
        }
    }
}

export function updateProductUsingId({productData, history})
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : UPDATE_PRODUCT
            })
    
            const res = await axios.put(`http://localhost:5000/api/products/product/${productData._id}`, {
                productData
            });
    
            dispatch({
                type:PRODUCT_UPDATED,
                payload:res.data.product
            })

            history.push('/seller/home');

        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : UPDATE_PRODUCT_ERROR,
                payload : err
            })
        }
        

    }
}

export function deleteProductUsingId(product_id)
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : DELETE_PRODUCT
            })
    
            const res = await axios.delete(`http://localhost:5000/api/products/product/${product_id}`, {
                headers : {
                    'x-auth-token' : localStorage.getItem('seller-token')
                }
            });
    
            dispatch({
                type : PRODUCT_DELETED,
                payload : {product_id}
            })
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : DELETE_PRODUCT_ERROR,
                payload : err
            })
        }
        
    }
}

// export function getProductsOfAllSellers()
// {
//     return async (dispatch) => {
//         dispatch({
//             type : GET_ALL_SELLERS_PRODUCTS
//         })

//         const res = await axios.get("http://localhost:5000/api/products/sellers/all", {
//             headers : {
//                 'x-auth-token' : localStorage.getItem('seller-token')
//             }
//         })

        
//     }
// }