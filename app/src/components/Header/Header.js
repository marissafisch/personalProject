import React, { Component } from 'react';
import './Header.scss';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateLoginStatus, logout } from '../../ducks/reducer';

class Header extends Component {

	constructor(){
		super() 
		this.state = {
			
		}
	}

	render() {
		console.log(process.env.REACT_APP_LOGIN)
		const { updateLoginStatus, logout } = this.props;
		return (
			<div id="header">
				<div className="header-container">
					
					
						<nav>
							
					    
							<ul className="nav-bar-left">
								<li><Link to="/"><img className='header-image' src={logo} alt="Logo" /></Link></li>
								<li>
								<Link
								className="Home-Link"
								to="/"
								>	
								Home
								</Link>
								</li>
								<li>
								<Link
								className="Features-Link"
								to="/features"
								>
								Features
								</Link>
								</li>
								<li>
								<a href= {process.env.REACT_APP_LOGIN}><h4>Profile</h4></a>
								</li>
							</ul>

							<div className="nav-bar-right">
								<a href={process.env.REACT_APP_LOGOUT}><h4>Logout</h4></a>
							</div>
						</nav>
					
				</div >
			</div >
		)
	}

}

function mapStateToProps(state) {
	const { user, userId, loginStatus } = state;

  return {
	user,
	userId,
	loginStatus
	
  }
}

let outputActions = {
	updateLoginStatus,
	logout
}

export default connect (mapStateToProps, outputActions) (Header);