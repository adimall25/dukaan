import {LOGIN_BUYER, LOGIN_SELLER, BUYER_LOGIN_SUCCESS, SELLER_LOGIN_SUCCESS, BUYER_LOGIN_FAIL, SELLER_LOGIN_FAIL, BUYER_LOGOUT, BUYER_ACCOUNT_DELETED, SELLER_LOGOUT, SELLER_ACCOUNT_DELETED, LOAD_SELLER, SELLER_LOADED, SELLER_LOAD_ERROR} from "./types.js";
import axios from "axios"
import setCookie from "../utils/cookies/setCookie.js";


//login buyer
export const loginBuyer = ({googleToken, history}) => {
    return async (dispatch) => {
        try
        {
            const body = {
                tokenId : googleToken
            }
    
            dispatch({
                type : LOGIN_BUYER
            })
    
            const res = await axios.post('http://localhost:5000/api/auth/buyer/signin', body)

            setCookie('buyer-token', res.data.token);

            dispatch({type : BUYER_LOGIN_SUCCESS, payload : {token : res.data.token, buyer : res.data.buyer}})

            history.push("/buyer/home")
            console.log(res);
        }
        catch(err)
        {
            console.log(err);
            dispatch({type : BUYER_LOGIN_FAIL, payload : {msg : err.response.data.msg}})
        }
       
    }
}

//login seller
export const loginSeller = ({googleToken, history}) => {
    return async (dispatch) => {
        try
        {
            const body = {
                tokenId : googleToken
            }
    
            dispatch({
                type : LOGIN_SELLER
            })
    
            const res = await axios.post('http://localhost:5000/api/auth/seller/signin', body)

            setCookie('seller-token', res.data.token);

            dispatch({type : SELLER_LOGIN_SUCCESS, payload : {token : res.data.token, seller : res.data.seller}})
            history.push("/seller/home")

            console.log(res);
        }
        catch(err)
        {
            console.log("YO");
            console.log(err);
            dispatch({type : SELLER_LOGIN_FAIL, payload : {msg : err}})
        }
       
    }
}

//load seller
export const loadSeller = () => {
    return async (dispatch) => {
        try
        {
            dispatch({
                type : LOAD_SELLER
            })

            const res = await axios.get("http://localhost:5000/api/auth/seller/me", {
                headers : {
                    'x-auth-token' : localStorage.getItem('seller-token')
                }
            })

            dispatch({
                type : SELLER_LOADED,
                payload : res.data.seller
            })
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : SELLER_LOAD_ERROR
            })
        }
    }
}

