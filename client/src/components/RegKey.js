import React, { useState } from 'react';

import AuthNav from './AuthNav';

const RegKey = () => {

    const [RegKeyData, setRegKeyData] = useState({
        userEmail: '',
        userPassword: ''
    });

    const {userEmail, userKey, userPassword} = RegKeyData;

    const onChange = (e) => setRegKeyData({
        ...RegKeyData,
        [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(RegKeyData)
        setRegKeyData({
            userKey: '',
            userEmail: '',
            userPassword: ''
        })
    }

    return (  

        <form onSubmit={onSubmit} className="bg-dark p-3">
            <AuthNav />
            <fieldset className="text-white">
                <h4 className="text-primary text-center">RegKey</h4>
                <hr className="bg-primary" />
                    <div className="form-group">        
                        <label htmlFor="userKey" className="col-sm-12 col-form-label">
                            Registry Key
                        </label>
                        <div className="col">
                            <input type="text" className="form-control" id="userKey" name="userKey" placeholder="Your Key" value={userKey} onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group">        
                        <label htmlFor="userEmail" className="col-sm-12 col-form-label">
                            Email
                        </label>
                        <div className="col">
                            <input type="text" className="form-control" id="userEmail" name="userEmail" placeholder="Your Email" value={userEmail} onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword" className="col-sm-12 col-form-label">
                            Password
                        </label>
                        <div className="col">
                            <input type="password" className="form-control" id="userPassword" name="userPassword" placeholder="Your Password" value={userPassword} onChange={onChange} />
                        </div>                
                    </div>
                    <div className="form-group mt-5">             
                        <input type="submit" className="btn btn-block btn-primary" value="Login now" />
                    </div>                    
            </fieldset>
        </form>      
    )
}
export default RegKey;