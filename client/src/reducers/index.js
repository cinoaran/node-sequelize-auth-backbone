import { combineReducers } from 'redux';

import authReducer from './auth';
import alertReducer from './alert';
import dashReducer from './dashboard';


export default combineReducers({    
    auth: authReducer,       
    dash: dashReducer,
    alert: alertReducer
})
