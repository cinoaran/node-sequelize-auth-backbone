import axios from 'axios';
import {
    AUTH_SIGN_UP,
    AUTH_SIGN_UP_ERROR,  
    AUTH_SIGN_IN,
    AUTH_SIGN_IN_ERROR,
    AUTH_REG_KEY,
    AUTH_REG_KEY_ERROR,
    AUTH_SIGN_OUT,
    SET_ALERT,
    REMOVE_ALERT,
    CLEAR_ERRORS,     
    DASHBOARD_GET_DATA
 } from './action-types/types';


export const signUp = (data) => {
    
    return async (dispatch) => {

        try{
                        
            const res = await axios.post('/clients/signup', data);           

            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data
            })

        }catch(error){        
           const serverResponse = (error.response.data.message) ? error.response.data.message : error.response.data;
           dispatch({
                type: AUTH_SIGN_UP_ERROR,
                payload: serverResponse
            })
            
        }
    }

}

export const signIn = (data) => {
   
    return async (dispatch) => {

        try{
            
            const res = await axios.post('/users/signin', data)
            
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.jwtToken
            })

            localStorage.setItem('JWT_TOKEN', res.data.jwtToken);
            axios.defaults.headers.common['Authorization'] = res.data.jwtToken;

        } catch(error){         
               
            dispatch({
                type: AUTH_SIGN_IN_ERROR,                
                payload: error.response.data
            })
            
        }
    }

}

export const regKey = (data) => {
       
    return async (dispatch) => {       

        try{
            
            const res = await axios.post('/users/regkey', data)
            
            dispatch({
                type: AUTH_REG_KEY,
                payload: res.data
            })            

        } catch(error) {         
            const serverResponse = (error.response.data.message) ? error.response.data.message : error.response.data;  
            dispatch({
                type: AUTH_REG_KEY_ERROR,
                payload: serverResponse
            })
            
        }
    }

}

export const setAlert = (msg, type, timeout = 5000) =>{

    
    return async(dispatch) => {
        try {
            console.log('SET_ALERT ACTION', msg, type, timeout);
            const id = new Date().getTime();
            dispatch({
                type: SET_ALERT,
                payload: { msg, type, id }
            });
        
            setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
            
        } catch (error) {
            console.error(error)
        }

    }
}

export const clearErrors = () => {

    return async(dispatch) => {

        dispatch({
            type: CLEAR_ERRORS,
          });
    }
}

export const getDashBoard = () => {

     return async dispatch => {
            try{
            
                const res = await axios.get('/dashboard');               
                
                dispatch({
                    type: DASHBOARD_GET_DATA,
                    payload: res.data
                });

                
            }catch(err){
                console.log(err)
            }

        }
    }

export const signOut = () => {
    
    return dispatch => {

        localStorage.removeItem('JWT_TOKEN');
        axios.defaults.headers.common['Authorization'] = '';

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        });
    }

}