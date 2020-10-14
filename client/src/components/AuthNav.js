import React from 'react';
import { Link } from 'react-router-dom';


const AuthNav = () => {

    return( 
        <div className="d-flex">
                <Link className="nav-link" to="/"><i className="fa fa-sign-in" aria-hidden="true"></i> SignIn</Link>
                <Link className="nav-link" to="/regkey"><i className="fa fa-key" aria-hidden="true"></i> RegKey</Link>
                <Link className="nav-link" to="/signup"><i className="fa fa-user" aria-hidden="true"></i> SignUp</Link>
            </div>            
    )      
}

export default AuthNav;