import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { signUp, setAlert, clearErrors } from '../actions/';
import Alert from './Alert';
import '../../src/main.css';

const SignUp = (props) => {

    const {errorMessage, successMessage} = props.auth; 

    const clientKeyDefault = new Date().getTime() + '-REG-INT';
    
    const [signUpData, setSignUpData] = useState({
        addressStreet: '',
        addressZip: '',
        addressCity: '',
        addressCountry: '',
        clientKey: clientKeyDefault,
        clientRange: '300',
        clientText: '',
        clientCompany: '',        
        clientEmail: '',
        clientPhone: '',
        clientFax: '',
        clientMobile: ''        
    });

    const {
        addressStreet,
        addressZip,
        addressCity,
        addressCountry,        
        clientText,        
        clientCompany,        
        clientEmail,
        clientPhone,
        clientFax,
        clientMobile        
    } = signUpData;

    const {setAlert, clearErrors} = props;

    useEffect(() => {      
        if (errorMessage) {
            setAlert(errorMessage, 'danger');
            clearErrors();
          }else if(successMessage) {
            setAlert(successMessage.message, 'white');
            clearErrors();
          }         
    },[errorMessage, setAlert, clearErrors, successMessage]);  

   const textAreaLength = 200;
   const onChange = (e) => {    
       if (e.target.name === 'clientText') {
        // const maxLength = document.querySelector('#clientText').getAttribute('maxLength');              
           if(clientText.length <= textAreaLength) {
                setSignUpData({
                    ...signUpData,
                    clientText
                });
            } 
       }       
       
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        });    
    }

    const onSubmit = async(e) => { 
            e.preventDefault();           
            await props.signUp(signUpData); 
    }

    return (  
        <div>
            <form onSubmit={onSubmit} className="bg-dark p-3">           
            <h4 className="text-primary text-center">SignUp</h4>
            <Alert />
            <hr className="bg-primary" />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <fieldset className="text-white">              
                        <div className="form-group">        
                            <label htmlFor="addressStreet" className="col-sm-12 col-form-label">
                                Street *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressStreet" name="addressStreet" minLength="3" maxLength="30" placeholder="Mainstr. 555" value={addressStreet} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="form-group">        
                            <label htmlFor="addressZip" className="col-sm-12 col-form-label">
                                Zip Code *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressZip" name="addressZip" minLength="3"  maxLength="10" placeholder="10987" value={addressZip} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressCity" className="col-sm-12 col-form-label">
                                City *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressCity" name="addressCity" minLength="3" maxLength="30" placeholder="Berlin" value={addressCity} onChange={onChange} required/>
                            </div>                
                        </div> 
                        <div className="form-group">
                            <label htmlFor="addressCountry" className="col-sm-12 col-form-label">
                                Country *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressCountry" name="addressCountry" minLength="3" maxLength="30"  placeholder="Germany" value={addressCountry} onChange={onChange} required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientComment" className="col-sm-12 col-form-label">
                                Comment *
                            </label>
                            <div className="col">
                                <textarea className="form-control" rows="2" id="clientText" name="clientText" placeholder="Your Comment" maxLength={textAreaLength} value={clientText} onChange={onChange}/>
                                <span className={(textAreaLength === clientText.length) ? 'text-danger': 'text-white'}> Max chars: ({textAreaLength}/{clientText.length})</span> 
                            </div> 
                                         
                        </div>                                     
                    </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                    <fieldset className="text-white">                        
                        <div className="form-group">
                            <label htmlFor="clientCompany" className="col-sm-12 col-form-label">
                                Company *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientCompany" name="clientCompany" minLength="3" maxLength="30" placeholder="ABC Group" value={clientCompany} onChange={onChange} required/>
                            </div>                
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="clientEmail" className="col-sm-12 col-form-label">
                                Email *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientEmail" name="clientEmail" placeholder="john@gmail.com" value={clientEmail} onChange={onChange} required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientPhone" className="col-sm-12 col-form-label">
                                Phone *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientPhone" name="clientPhone" minLength="3" maxLength="30" placeholder="0049.030.987.65.43" value={clientPhone} onChange={onChange} required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientFax" className="col-sm-12 col-form-label">
                                Fax *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientFax" name="clientFax" minLength="3" maxLength="30" placeholder="0049.030.987.44.55" value={clientFax} onChange={onChange} required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientMobile" className="col-sm-12 col-form-label">
                                Mobile *
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientMobile" name="clientMobile" minLength="3" maxLength="30" placeholder="0049.030.987.44.55" value={clientMobile} onChange={onChange} required/>
                            </div>                
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="form-group mt-5">             
                <input type="submit" className="btn btn-block btn-primary" value="Login now" />
            </div>                
        </form>      
        </div>
    )
}
    const mapStateToProps = (state)=>{
        return {  
        auth: state.auth                                   
        }
    }
  
  export default connect(mapStateToProps, { signUp, setAlert, clearErrors } )(SignUp);