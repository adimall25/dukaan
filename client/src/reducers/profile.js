import {
    GET_PROFILE, 
    PROFILE_LOADED, 
    PROFILE_ERROR, 
    CLEAR_PROFILE, 
    UPDATE_PROFILE, 
    GET_PROFILES, 
    PROFILES_LOADED,
    GET_GITHUB_REPOS,
    GITHUB_REPOS_LOADED
} from "../actions/types.js";

const initialState = {
    buyerProfile:null,
    sellerProfile:null,
    sellerProfiles:[],
    loading: false,
    error: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_PROFILE: 
        case GET_PROFILES:
        case GET_GITHUB_REPOS:
            return {...state, loading:true};
        case PROFILES_LOADED:
            return {...state, profiles: payload, loading:false};
        case UPDATE_PROFILE:
        case PROFILE_LOADED:
            return {...state, profile:payload, loading:false};
        case GITHUB_REPOS_LOADED:
            return {...state, repos:payload, loading:false};
        case CLEAR_PROFILE:
            return {...state, profile:null, repos:[], error:{}}
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            };
        default: return {...state};
    }
}