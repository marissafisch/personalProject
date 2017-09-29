import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


export default class Features extends Component {

	render() {

        return (
            <div id="features">
                <div className='features-partyUp-container'>

                    <h2><span>
                        Party Up takes the headache out of hosting a party or event.
                        So long paper sign-up sheets and reply-all emails! Coordinate 
                        events and guests by utilizing our online sign-up tool.
                    </span></h2>
                

                </div>
                {/* <div className="footer-container">
                    <nav>
						<Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
						<Link to="/profile"><img src={signUpIcon} alt="Create Event" /></Link>
				    </nav>

                </div> */}

            </div>
        )
        
    }
}
