import React, { Fragment } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../actions/';

 const AuthSignOut = (props) => {
     
    const onClick= () => {
        props.signOut();
    };

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/signout" onClick={onClick}><i className="fa fa-sign-out" aria-hidden="true"></i> SignOut</Link>
            </li>
        </Fragment>
    )
}
export default connect(null,{ signOut })(AuthSignOut);