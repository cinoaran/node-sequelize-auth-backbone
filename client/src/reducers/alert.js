import {      
    SET_ALERT,
    REMOVE_ALERT } from '../actions/action-types/types';

const DEFAULT_STATE = []

export default(state= DEFAULT_STATE, action) => {    
    switch(action.type){        
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== action.payload);  
        default:
            return state
    }
}