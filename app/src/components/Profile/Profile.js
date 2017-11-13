import React, { Component } from 'react';
import './Profile.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import profileImage from '../../images/slide.jpg';
import { getAllParties, getAllTasks, getAllGuests, getUser } from '../../ducks/reducer';

class Profile extends Component {

    componentDidMount(){
        this.props.getUser()
        this.props.getAllParties(this.props.user.id)
        this.props.getAllTasks()
    }

	render() {
        let partyListToDisplay = this.props.partyList.map((e, i) => {
            return(
                <div className="parties-container">
                    <div className="partyName">
                        Party Name : {e.party_name}
                    </div>
                    <div className="partyDate">
                        Party Date : {e.party_date}
                    </div>
                    <div className="partyGuests">
                        Party Description : {e.party_description}
                    </div>
                </div>
            )
        })
        const { getAllParties, getAllTasks, getAllGuests } = this.props;
        return (
            <div id="profile">
                <div className="profile-container">
                    
                    
                <div className="profile-create-event">
                    <Link to="/create_event">
                    <button className="create-event-button"> Create An Event</button>
                    </Link>
                </div>
                <div className="events-container-title">
                    <div className="view-upcoming-events">
                        <h1>View Upcoming Events</h1>
                    </div>
                </div>
                <div className="events-container-events">

                    <div className="party-display-container">
                    {partyListToDisplay}
                    </div>
                </div>

                
                
                
                
                
                
                
                </div>

            </div>
        )
        
    }
}

function mapStateToProps(state) {
    const { partyList, partyGuests, partyTasks } = state;
  
    return {
    partyList,
    partyGuests,
    partyTasks
    
  };
}
let outputActions = {
    getAllParties,  
    getAllGuests,
    getAllTasks,
    getUser

}

export default connect (mapStateToProps, outputActions) (Profile); 

