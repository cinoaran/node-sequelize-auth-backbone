import React from 'react';
import { connect } from 'react-redux';


const Alerts = (props) => {
  
  return (
   props.alerts.length > 0 &&
    props.alerts.map((alert) => (
      <div key={alert.id} className={`bg-dark alert text-${alert.type} text-center`}>        
        {(alert.msg === 'Unauthorized') ? 'Credentials are not valid': alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state)=>{
    return {  
      alerts: state.alert                     
    }
  }
  

export default connect(mapStateToProps)(Alerts);