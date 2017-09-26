import React, { Component } from 'react';
import './View_Edit_Event.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations,
         updatePartySupplies, updatePartyFood, updatePartyGuests, sendPartyInvite
         } from '../../ducks/reducer';

class View_Edit_Event extends Component {

	render() {
        const { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations, updatePartySupplies, 
         updatePartyFood, sendPartyInvite } = this.props;
        return (
            <div id="view-edit-event">
                
            <div className="view-edit-event-container">
               <p> Create Event</p>
           <div className="party-container">
               Party Name
               <input placeholder="partyName" type="text" onChange={ ( e ) => updatePartyName( e.target.value ) } />
        
               Party Description
               <input placeholder="partyDescription" type="text" onChange={ ( e ) => updatePartyDescription( e.target.value ) } />  

                Date
               <input placeholder="partyDate" type="text" onChange={ ( e ) => updatePartyDate( e.target.value ) } />  

                Location
               <input placeholder="partyLocation" type="text" onChange={ ( e ) => updatePartyLocation( e.target.value ) } />  

                Address
               <input placeholder="partyAddress" type="text" onChange={ ( e ) => updatePartyAddress( e.target.value ) } />  

               Decorations
               <input placeholder="partyDecorations" type="text" onChange={ ( e ) => updatePartyDecorations( e.target.value ) } /> 

               Supplies
               <input placeholder="partySupplies" type="text" onChange={ ( e ) => updatePartySupplies( e.target.value ) } /> 

               Food
               <input placeholder="partyFood" type="text" onChange={ ( e ) => updatePartyFood( e.target.value ) } /> 

               Invite By Email
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

export default connect (mapStateToProps, outputActions) (View_Edit_Event); 

