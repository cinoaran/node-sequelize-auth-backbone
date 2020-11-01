import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { signIn, setAlert, clearErrors } from '../actions/';
import Alert from './Alert';
import '../../src/main.css';

const SignIn = (props) => { 

    const { errorMessage, isAuthenticated, regUser } = props.auth;  
    

    const [signInData, setSignInData] = useState({
        userEmail: '',
        userPassword: '',
        userPerson: ''     
    });

    const {userEmail, userPassword, userPerson} = signInData;
    
    const {history, setAlert, clearErrors} = props;

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/dashboard');
          }

        if (errorMessage) {
            setAlert(errorMessage, 'danger');
            clearErrors();
          } 

    },[errorMessage, isAuthenticated, clearErrors, setAlert, history]);
    
       
    const onChange = (e) => setSignInData({
        ...signInData,
        [e.target.name]: e.target.value
    });
    
    const onSubmit = async(e) => {
        e.preventDefault();
        await props.signIn(signInData); 
    }

    

    return ( 
            <div>
                <form onSubmit={onSubmit} className="bg-dark p-3"> 
                <fieldset className="text-white">
                <h4 className="text-primary text-center">SignIn {(regUser) ? <span className="text-white">{regUser.user_person}</span> : ''}</h4> 
                    <Alert />                   
                    <hr className="bg-primary" />
                        <div className="form-group">        
                            <label htmlFor="userPerson" className="col-sm-12 col-form-label">
                                Person *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="userPerson" name="userPerson" minLength="3" maxLength="30" placeholder="Your Person" value={userPerson} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="form-group">        
                            <label htmlFor="userEmail" className="col-sm-12 col-form-label">
                                Email *
                            </label>
                            <div className="col">
                                <input type="email" className="form-control" id="userEmail" name="userEmail" placeholder="Your Email" value={userEmail} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userPassword" className="col-sm-12 col-form-label">
                                Password *
                            </label>
                            <div className="col">
                                <input type="password" className="form-control" id="userPassword" name="userPassword" minLength="3" maxLength="30" placeholder="Your Password" value={userPassword} onChange={onChange} required />
                            </div>                
                        </div>
                        <div className="form-group mt-5">             
                            <input type="submit" className="btn btn-block btn-primary" value="Login now" />
                        </div>                    
                </fieldset>
                </form>      
            </div>
    )
}
const mapStateToProps = (state)=>{
    return {  
      auth: state.auth                             
    }
  }
  
  export default connect(mapStateToProps, { signIn, setAlert, clearErrors } )(SignIn);