import {
    CREATE_BUYER_PROFILE,
    BUYER_PROFILE_CREATED,
    GET_BUYER_PROFILE, 
    BUYER_PROFILE_LOADED, 
    BUYER_PROFILE_ERROR, 
    CLEAR_BUYER_PROFILE, 
    UPDATE_BUYER_PROFILE,
    BUYER_PROFILE_UPDATED,
    GET_BUYER_PROFILES, 
    BUYER_PROFILE_NOT_FOUND,
    SELLER_PROFILE_NOT_FOUND,
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
    SELLER_PROFILES_LOADED,
    SELLER_PROFILES_ERROR
} from "../actions/types.js";

const initialState = {
    buyerProfile:null,
    sellerProfile:null,
    sellerProfiles:[],
    buyerProfiles : [],
    loading: false,
    error : {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case CREATE_BUYER_PROFILE:
        case CREATE_SELLER_PROFILE:
        case GET_BUYER_PROFILE: 
        case GET_BUYER_PROFILES:
        case GET_SELLER_PROFILE:
        case GET_SELLER_PROFILES:
        case UPDATE_BUYER_PROFILE:
        case UPDATE_SELLER_PROFILE:
            return {...state, loading:true};

        case BUYER_PROFILE_CREATED:
        case BUYER_PROFILE_UPDATED:
        case BUYER_PROFILE_LOADED:
            return {...state, buyerProfile:payload?.buyerProfile, loading:false};
        case BUYER_PROFILE_NOT_FOUND:
        case SELLER_PROFILE_NOT_FOUND:
            return {...state, loading: false};
        case BUYER_PROFILES_LOADED:
            return {...state, buyerProfiles: payload.buyerProfiles, loading:false};
        case BUYER_PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            };
    
        case SELLER_PROFILE_CREATED:
        case SELLER_PROFILE_UPDATED:
        case SELLER_PROFILE_LOADED:
            return {...state, sellerProfile:payload.sellerProfile, loading:false};
        case SELLER_PROFILES_LOADED:
            return {...state, sellerProfiles: payload, loading:false};
        case SELLER_PROFILES_ERROR:
        case SELLER_PROFILE_ERROR:
        return {
            ...state,
            error: payload,
            loading:false
        };

        case CLEAR_SELLER_PROFILE:
            return {...state, sellerProfile:null , error:{}}
        case CLEAR_BUYER_PROFILE:
            return {...state, buyerProfile:null , error:{}}
        
        default: return {...state};
    }
}