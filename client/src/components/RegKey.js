import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import { regKey, setAlert, clearErrors } from '../actions/';
import Alert from './Alert';
import '../../src/main.css';

const RegKey = (props) => {
 
    const {errorMessage, regUser} = props.auth;
    
   
    const [RegKeyData, setRegKeyData] = useState({
        clientKey: '',
        userEmail: '',
        userPassword: '',
        userPerson: ''
    });

    const {clientKey, userPerson, userEmail, userPassword} = RegKeyData;
    const {history, setAlert, clearErrors} = props;
    
    useEffect(() => {
        
        if (errorMessage) {
            setAlert(errorMessage, 'danger');
            clearErrors();
          };

        if(regUser) {
            // setAlert('REGISTERED USER: ' + regUser.user_person, 'white', '10000');
            history.push('/');
        }
    },[errorMessage, setAlert, clearErrors, regUser, history]);


    const onChange = (e) => setRegKeyData({
        ...RegKeyData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async(e) => {
        e.preventDefault();
        await props.regKey(RegKeyData);         
      
    }

    return ( 
        <form onSubmit={onSubmit} className="bg-dark p-3">           
            <fieldset className="text-white">
                <h4 className="text-primary text-center">RegKey register</h4>               
                <Alert /> 
                <hr className="bg-primary" />
                    <div className="form-group">        
                        <label htmlFor="clientKey" className="col-sm-12 col-form-label">
                            Registry Key *
                        </label>
                        <div className="col">
                            <input type="text" className="form-control" id="clientKey" name="clientKey" minLength="3" maxLength="30"  placeholder="Your Registry Key" value={clientKey} onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="form-group">        
                        <label htmlFor="userPerson" className="col-sm-12 col-form-label">
                            Person *
                        </label>
                        <div className="col">
                            <input type="text" className="form-control" id="userPerson" name="userPerson" minLength="3" maxLength="30"  placeholder="Person name" value={userPerson} onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="form-group">        
                        <label htmlFor="userEmail" className="col-sm-12 col-form-label">
                            Email *
                        </label>
                        <div className="col">
                            <input type="email" className="form-control" id="userEmail" name="userEmail" placeholder="Your Email" value={userEmail} onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword" className="col-sm-12 col-form-label">
                            Password *
                        </label>
                        <div className="col">
                            <input type="password" className="form-control" id="userPassword" name="userPassword" minLength="3" maxLength="30" placeholder="Your Password" value={userPassword} onChange={onChange} required/>
                        </div>                
                    </div>
                    <div className="form-group mt-5">             
                        <input type="submit" className="btn btn-block btn-primary" value="Register now" />
                    </div>                    
            </fieldset>
        </form>      
    )
}

const mapStateToProps = (state)=>{
    return {  
      auth: state.auth                  
    }
  }

export default connect(mapStateToProps, { regKey, setAlert, clearErrors })(RegKey);