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
		const { updateLoginStatus, logout } = this.props;
		return (
			<div id="header">
				<div className="header-container">
					
					
						<nav>
							<Link to="/"><img className='header-image' src={logo} alt="Logo" /></Link>
					    </nav>
                        <ul className="nav-bar-left">
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
            				<a href= 'http://localhost:3030/auth'><h4>Profile</h4></a>
							</li>
                        </ul>

                        <div className="nav-bar-right">
							<a href='/api/auth/logout'><h4>Logout</h4></a>
						</div>
					
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