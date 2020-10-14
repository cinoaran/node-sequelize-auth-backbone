import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link className="navbar-brand" to="/">NC GROUP DRIVE WALK</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <ul className="nav navbar-nav ml-auto text-light">                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/signout">SignOut</Link>
                    </li>
                </ul>
            </div>
        </nav>            
    )      
}

export default Header;
