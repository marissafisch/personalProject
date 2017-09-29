import React, { Component } from 'react';
import './Create_Event.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations,
         updatePartySupplies, updatePartyFood, updatePartyGuests,
         } from '../../ducks/reducer';

class Create_Event extends Component {


	render() {
        const { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations, updatePartySupplies, 
         updatePartyFood } = this.props;

         let partyDetails = {
            partyName: this.props.partyName,
            partyDate: this.props.partyDate,
            partyLocation: this.props.partyLocation,
            partyAddress: this.props.partyAddress,
            partyDescription: this.props.partyDescription,
            partyDecorations: this.props.partyDecorations,
            partySupplies: this.props.partySupplies,
            partyFood: this.props.partyFood,
            
    }
        console.log(partyDetails)
         
        return (
            <div id="create_event">
                
            <div className="create-event-container">
                <p>Create Event</p>
            <div className="party-container">
               
                <div>
                    Party Name:
                    <input placeholder="Party Name" type="text" onChange={ ( e ) => updatePartyName( e.target.value ) } />
                </div>

                <div>
                    Date:
                    <input placeholder="mm/dd/yyyy" type="text" onChange={ ( e ) => updatePartyDate( e.target.value ) } />  
                </div>
                
                <div>
                    Location:
                    <input placeholder="Party Location" type="text" onChange={ ( e ) => updatePartyLocation( e.target.value ) } />  
                </div>
                
                <div>
                    Address:
                    <input placeholder="Address" type="text" onChange={ ( e ) => updatePartyAddress( e.target.value ) } />  
                </div>
                
                <div className="descriptionAreaDiv">
                    Party Description:
                    <textarea placeholder="Description of Party" type="text" onChange={ ( e ) => updatePartyDescription( e.target.value ) } />  
                </div>
                
                <div className="decorationsAreaDiv">
                    Decorations:
                    <textarea placeholder="Seperate By Comma" type="text" onChange={ ( e ) => updatePartyDecorations( e.target.value ) } /> 
                </div>
                
                <div className="suppliesAreaDiv">
                    Supplies:
                    <textarea placeholder="Seperate By Comma" type="text" onChange={ ( e ) => updatePartySupplies( e.target.value ) } /> 
                </div>
                
                <div className="foodAreaDiv">
                    Food:
                    <textarea placeholder="Seperate By Comma" type="text" onChange={ ( e ) => updatePartyFood( e.target.value ) } /> 
                </div>


                <Link to="/review_event"><button className="submit-party-button"> Submit</button>
                </Link>
            </div>
            </div>
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    const { partyName,  partyDate, partyLocation, partyAddress, partyDescription, partyDecorations,
            partySupplies, partyFood, partyGuests, partyInvite } = state;
  
    return {
        partyName, 
        partyDate, 
        partyLocation, 
        partyAddress,
        partyDescription, 
        partyDecorations,
        partySupplies, 
        partyFood, 
        partyGuests,
        partyInvite,
        
   
   
    
  }
}

let outputActions = {
    updatePartyName, 
    updatePartyDate, 
    updatePartyLocation,
    updatePartyAddress,
    updatePartyDescription,  
    updatePartyDecorations, 
    updatePartySupplies, 
    updatePartyFood, 
    updatePartyGuests,

}

export default connect (mapStateToProps, outputActions) (Create_Event); 

