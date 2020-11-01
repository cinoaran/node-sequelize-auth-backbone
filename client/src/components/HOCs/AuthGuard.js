import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route } from "react-router";


 const AuthGuard = (props) => {

    const {isAuth, authToken, type} = props;

    if(type === "private" && !isAuth && !authToken) return <Redirect to="/" />

    return <Route {...props} />
    
}

const mapStateToProps = (state)=>{
    return { 
        isAuth: state.auth.isAuthenticated,  
        authToken: state.auth.token                                   
    }
}
export default connect(mapStateToProps)(AuthGuard);