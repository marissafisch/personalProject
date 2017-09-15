import React, { Component } from 'react';
import logo from '../../logo.png';
import './Login.scss';

require('dotenv').config();

export default class Login extends Component {

	render() {

		return (
            <div className ="body">
			    <div className="main-container">
				    <div className="central-login">
					    <div className="login-container">
						    <div className="logo">
							    <img src={logo} className="signIn_logo" alt="logo" />
						    </div>
						    <div className="login-button-container">
						    <a href= 'http://localhost:3030/auth'><button className="login-button raise">Login</button></a>
					        </div>
				        </div>
			        </div>
			    </div>
            </div>
		)
	}
}

