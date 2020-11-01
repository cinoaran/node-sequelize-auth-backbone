import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDashBoard } from '../actions/';

import '../../src/main.css';

const Dashboard = (props) => {

    const { isAuthenticated, token } = props.auth;
    const { dashboard } = props.dash;
    const {getDashBoard} = props;

    useEffect(() => {
        if(isAuthenticated && token) {
            getDashBoard();
        }
    },[isAuthenticated, token, getDashBoard]);
    
    return (
        <div>
            Dashboard Component:
            The BA Data for Dasboard component is:
            <hr/>
            <h1>{dashboard.secret}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {  
      auth: state.auth,
      dash: state.dash                            
    }
  }

export default connect(mapStateToProps, { getDashBoard })(Dashboard);