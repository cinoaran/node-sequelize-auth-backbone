import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = () => {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/"><i className="fa fa-sign-in" aria-hidden="true"></i> SignIn</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/regkey"><i className="fa fa-key" aria-hidden="true"></i> RegKey</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/signup"><i className="fa fa-key" aria-hidden="true"></i> SignUp</Link>
            </li>            
        </Fragment>
    )
}

export default AuthLinks;
