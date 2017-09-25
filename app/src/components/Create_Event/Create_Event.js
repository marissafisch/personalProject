import React, { Component } from 'react';
import './Create_Event.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations,
         updatePartySupplies, updatePartyFood, updatePartyGuests, sendPartyInvite
         } from '../../ducks/reducer';

class Create_Event extends Component {

	render() {
        const { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations, updatePartySupplies, 
         updatePartyFood, sendPartyInvite } = this.props;
        return (
            <div id="create_event">
                
            <div className="createEvent_container">
               <p> Create Event</p>
           <div className="party_container">
               <span>Party Name</span><br />
               <input placeholder="partyName" type="text" onChange={ ( e ) => updatePartyName( e.target.value ) } />
        
               <span>Party Description</span><br/>
               <input placeholder="partyDescription" type="text" onChange={ ( e ) => updatePartyDescription( e.target.value ) } />  

                <span>Date</span><br/>
               <input placeholder="partyDate" type="text" onChange={ ( e ) => updatePartyDate( e.target.value ) } />  

                <span>Location</span><br/>
               <input placeholder="partyLocation" type="text" onChange={ ( e ) => updatePartyLocation( e.target.value ) } />  

                <span>Address</span><br/>
               <input placeholder="partyAddress" type="text" onChange={ ( e ) => updatePartyAddress( e.target.value ) } />  

               <span>Decorations</span><br/>
               <input placeholder="partyDecorations" type="text" onChange={ ( e ) => updatePartyDecorations( e.target.value ) } /> 

               <span>Supplies</span><br/>
               <input placeholder="partySupplies" type="text" onChange={ ( e ) => updatePartySupplies( e.target.value ) } /> 

               <span>Food</span><br/>
               <input placeholder="partyFood" type="text" onChange={ ( e ) => updatePartyFood( e.target.value ) } /> 

               <span>Invite By Email</span><br/>
               <input placeholder="partyInvite" type="text" onChange={ ( e ) => sendPartyInvite( e.target.value ) } /> 

                

            </div>
            </div>
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    const { partyName, partyDescription, partyDate, partyLocation, partyAddress, partyDecorations,
            partySupplies, partyFood, partyGuests, partyInvite } = state;
  
    return {
        partyName, 
        partyDescription, 
        partyDate, 
        partyLocation, 
        partyAddress, 
        partyDecorations,
        partySupplies, 
        partyFood, 
        partyGuests,
        partyInvite
   
   
    
  }
}

let outputActions = {
    updatePartyName, 
    updatePartyDescription, 
    updatePartyDate, 
    updatePartyLocation,
    updatePartyAddress, 
    updatePartyDecorations, 
    updatePartySupplies, 
    updatePartyFood, 
    updatePartyGuests, 
    sendPartyInvite

}

export default connect (mapStateToProps, outputActions) (Create_Event); 

