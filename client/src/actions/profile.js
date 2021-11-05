import {
    CREATE_BUYER_PROFILE,
    BUYER_PROFILE_CREATED,
    GET_BUYER_PROFILE, 
    BUYER_PROFILE_LOADED, 
    BUYER_PROFILE_ERROR, 
    BUYER_PROFILE_NOT_FOUND,
    SELLER_PROFILE_NOT_FOUND,
    CLEAR_BUYER_PROFILE, 
    UPDATE_BUYER_PROFILE,
    BUYER_PROFILE_UPDATED,
    GET_BUYER_PROFILES, 
    BUYER_PROFILES_LOADED,

    CREATE_SELLER_PROFILE,
    SELLER_PROFILE_CREATED,
    GET_SELLER_PROFILE, 
    SELLER_PROFILE_LOADED, 
    SELLER_PROFILE_ERROR, 
    CLEAR_SELLER_PROFILE, 
    UPDATE_SELLER_PROFILE,
    SELLER_PROFILE_UPDATED, 
    GET_SELLER_PROFILES, 
    SELLER_PROFILES_LOADED
} from "./types.js";

import axios from "axios";
import getCookie from "../../src/utils/cookies/getCookie";

export function getLoggedInBuyer()
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type:GET_BUYER_PROFILE
            })
            const res = await axios.get("http://localhost:5000/api/profile/buyer/me", {
                headers : {
                    'x-auth-token' : getCookie("buyer-token")
                }
            })
            console.log(res);
            if(res.data.buyerProfile)
            {
                dispatch({
                    type : BUYER_PROFILE_LOADED,
                    payload : {
                        buyerProfile : res.data.buyerProfile
                    }
                })
            }
            else
            {
                dispatch({
                    type : BUYER_PROFILE_NOT_FOUND
                })
            }
            
        }
        catch(err)
        {
            console.log(err)
            dispatch({
                type : BUYER_PROFILE_ERROR,
                payload: err
            })
        }
        
    }
}