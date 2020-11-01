import React from 'react';
import jwtDecode from 'jwt-decode';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../actions/';
import AuthLinks from './AuthLinks';
import AuthSignOut from './AuthSignOut';

const Header = (props) => {

    const {isAuth, authToken } = props;
    const user =  (authToken) ? jwtDecode(authToken) : '';     
    
    const authLinks = (!isAuth && !authToken) ? 
    <AuthLinks /> 
    : 
    <AuthSignOut />;  

    return( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link className="navbar-brand text-primary" to="/">DRIVE WALK TEST</Link>
            <div className="collapse navbar-collapse">               
               <ul className="nav navbar-nav ml-auto">
                    { authLinks }                    
                    <Link className="nav-link text-uppercase text-primary" to="/">{user.sub.userPerson}</Link> 
                </ul>
            </div>
        </nav>            
    )      
}
const mapStateToProps = (state)=>{
    return { 
        isAuth: state.auth.isAuthenticated,  
        authToken: state.auth.token                                   
    }
}
export default connect(mapStateToProps, { signOut })(Header);
