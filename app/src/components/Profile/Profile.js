import React, { Component } from 'react';
import './Profile.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import profileImage from '../../images/slide.jpg';
import { getAllParties, getAllTasks, getAllGuests } from '../../ducks/reducer';

class Profile extends Component {

	render() {
        const { getAllParties, getAllTasks, getAllGuests } = this.props;
        return (
            <div id="profile">
                <div className="profile-container">
                    
                    
                    <div className="profile-create-event">
                        <Link to="/create_event">
                        <button className="create-event-button"> Create An Event</button>
                        </Link>
                    </div>
                        <div className="view-upcoming-events">
                            <h1>View Upcoming Events</h1>
                        
                        
                        </div>

                
                
                
                
                
                
                
                </div>

            </div>
        )
        
    }
}

function mapStateToProps(state) {
    const { partyName, partyGuests} = state;
  
    return {
    partyName,
    partyGuests
    
  };
}
let outputActions = {
    getAllParties,  
    getAllGuests,
    getAllTasks

}

export default connect (mapStateToProps, outputActions) (Profile); 

