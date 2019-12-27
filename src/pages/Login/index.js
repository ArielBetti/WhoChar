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
                        <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>
                    </div>
                </div>
            </div>
            <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v5.0&appId=576678136423139&autoLogAppEvents=1"></script>
        </div>
    );
}