import React, { useState } from 'react';

import AuthNav from './AuthNav';

const SignUp = () => {

    const [SignUpData, setSignUpData] = useState({
        addressStreet: '',
        addressZip: '',
        addressCity: '',
        addressCountry: '',
        clientComment: '',
        clientCompany: '',
        clientPerson: '',
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
        clientComment,
        clientCompany,
        clientPerson,
        clientEmail,
        clientPhone,
        clientFax,
        clientMobile
    } = SignUpData;

    const onChange = (e) => setSignUpData({
        ...SignUpData,
        [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(SignUpData)
        setSignUpData({
            addressStreet: '',
            addressZip: '',
            addressCity: '',
            addressCountry: '',
            clientComment: '',
            clientCompany: '',
            clientPerson: '',
            clientEmail: '',
            clientPhone: '',
            clientFax: '',
            clientMobile: ''
        })
    }

    return (  

        <form onSubmit={onSubmit} className="bg-dark p-3">
            <AuthNav />
            <h4 className="text-primary text-center">SignUp</h4>
            <hr className="bg-primary" />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <fieldset className="text-white">              
                        <div className="form-group">        
                            <label htmlFor="addressStreet" className="col-sm-12 col-form-label">
                                Address
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressStreet" name="addressStreet" placeholder="Mainstr. 555" value={addressStreet} onChange={onChange} />
                            </div>
                        </div>
                        <div className="form-group">        
                            <label htmlFor="addressZip" className="col-sm-12 col-form-label">
                                Zip Code
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressZip" name="addressZip" placeholder="10987" value={addressZip} onChange={onChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressCity" className="col-sm-12 col-form-label">
                                City
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressCity" name="addressCity" placeholder="Berlin" value={addressCity} onChange={onChange} />
                            </div>                
                        </div> 
                        <div className="form-group">
                            <label htmlFor="addressCountry" className="col-sm-12 col-form-label">
                                Country
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="addressCountry" name="addressCountry" placeholder="Germany" value={addressCountry} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientComment" className="col-sm-12 col-form-label">
                                Additional comment
                            </label>
                            <div className="col">
                                <textarea className="form-control" rows="5" id="clientComment" name="clientComment" placeholder="Your comment" value={clientComment} onChange={onChange} />
                            </div>                
                        </div>                                     
                    </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                    <fieldset className="text-white">
                        <div className="form-group">
                            <label htmlFor="clientCompany" className="col-sm-12 col-form-label">
                                Company
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientCompany" name="clientCompany" placeholder="ABC Group" value={clientCompany} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientPerson" className="col-sm-12 col-form-label">
                                Person
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientPerson" name="clientPerson" placeholder="John Doe" value={clientPerson} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientEmail" className="col-sm-12 col-form-label">
                                Email
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientEmail" name="clientEmail" placeholder="john@gmail.com" value={clientEmail} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientPhone" className="col-sm-12 col-form-label">
                                Phone
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientPhone" name="clientPhone" placeholder="0049.030.987.65.43" value={clientPhone} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientFax" className="col-sm-12 col-form-label">
                                Fax
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientFax" name="clientFax" placeholder="0049.030.987.44.55" value={clientFax} onChange={onChange} />
                            </div>                
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientMobile" className="col-sm-12 col-form-label">
                                Mobile
                            </label>
                            <div className="col">
                                <input type="text" className="form-control" id="clientMobile" name="clientMobile" placeholder="0049.030.987.44.55" value={clientMobile} onChange={onChange} />
                            </div>                
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="form-group mt-5">             
                <input type="submit" className="btn btn-block btn-primary" value="Login now" />
            </div>                
        </form>      
    )
}
export default SignUp;