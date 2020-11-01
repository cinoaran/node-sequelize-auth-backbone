import {       
    AUTH_SIGN_UP,
    AUTH_SIGN_UP_ERROR,  
    AUTH_SIGN_IN,
    AUTH_SIGN_IN_ERROR,
    AUTH_REG_KEY,
    AUTH_REG_KEY_ERROR,
    AUTH_SIGN_OUT,    
    CLEAR_ERRORS } from '../actions/action-types/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',    
    regUser: '',
    user: '',
    errorMessage: '',
    successMessage:''
}

export default(state= DEFAULT_STATE, action) => {
    switch(action.type){
        case AUTH_SIGN_UP:
            return {
                ...state,
                isAuthenticated: false,                             
                errorMessage: '',
                successMessage:  action.payload  
            }
        case AUTH_SIGN_UP_ERROR:        
            return {
                ...state,
                errorMessage: action.payload,
                successMessage:''
            }     
        case AUTH_REG_KEY:
            return {
                ...state,
                isAuthenticated: false,
                regUser: action.payload,
                errorMessage: '',
                successMessage:''
            }        
        case AUTH_REG_KEY_ERROR:        
            return {
                ...state,
                regUser: '',
                errorMessage: action.payload,
                successMessage:''
            } 
        case AUTH_SIGN_IN:            
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                regUser: '',
                errorMessage: '',
                successMessage:''
            }              
        case AUTH_SIGN_IN_ERROR:                   
            return {
                ...state,
                errorMessage: action.payload,
                successMessage:''
            }
        case AUTH_SIGN_OUT:                
            return {
                ...state,
                isAuthenticated: false,
                token: action.payload,
                errorMessage: '',
                successMessage:''
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errorMessage: null,
                successMessage: null
            }

        default:
             return state
    }
    
}