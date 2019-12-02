import React from 'react';
import './style.css';
import Routes from '../../routes';

export default function () {
    return (
        <div className="AppLogin">
            <div className="LoginContainer">
                <div className="logo">
                    WhoChar
                </div>
                <div className="inputslogin">
                    <input placeholder="Name" type="text" name="UserName" id="userlogin"/>
                    <input placeholder="Password" type="text" name="UserPassword" id="userpassword"/>
                    <div className="buttonslogin">
                        <button className="signin">Sign in</button>
                        <button className="signup">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}