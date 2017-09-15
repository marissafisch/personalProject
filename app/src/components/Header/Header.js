import React, { Component } from 'react';
import './Header.scss';
import logo from '../../logo.png';

import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					
						<nav>
							<Link to="/"><img className='header-image' src={logo} alt="Logo" /></Link>
							
						</nav>
						<div>
						
						</div>
						<div>
							<a href={process.env.REACT_APP_LOGOUT}><h4>Logout</h4></a>
						</div>
					
				</div >
			</div >
		)
	}
z
}