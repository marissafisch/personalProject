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
                
            <div className="create-event-container">
                <p>Create Event</p>
            <div className="party-container">
               
                <div>
                    Party Name:
                    <input placeholder="Party Name" type="text" onChange={ ( e ) => updatePartyName( e.target.value ) } />
                </div>

                <div>
                    Date:
                    <input placeholder="mm/dd/yy" type="text" onChange={ ( e ) => updatePartyDate( e.target.value ) } />  
                </div>
                
                <div>
                    Location:
                    <input placeholder="partyLocation" type="text" onChange={ ( e ) => updatePartyLocation( e.target.value ) } />  
                </div>
                
                <div>
                    Address:
                    <input placeholder="partyAddress" type="text" onChange={ ( e ) => updatePartyAddress( e.target.value ) } />  
                </div>
                
                <div>
                    Decorations:
                    <input placeholder="partyDecorations" type="text" onChange={ ( e ) => updatePartyDecorations( e.target.value ) } /> 
                </div>
                
                <div>
                    Supplies:
                    <input placeholder="partySupplies" type="text" onChange={ ( e ) => updatePartySupplies( e.target.value ) } /> 
                </div>
                
                <div>
                    Food:
                    <input placeholder="partyFood" type="text" onChange={ ( e ) => updatePartyFood( e.target.value ) } /> 
                </div>
                
                <div>
                    Invite By Email:
                    <input placeholder="partyInvite" type="text" onChange={ ( e ) => sendPartyInvite( e.target.value ) } /> 
                </div>


                <div className="textAreaDiv">
                    Party Description:
                    <textarea placeholder="partyDescription" type="text" onChange={ ( e ) => updatePartyDescription( e.target.value ) } />  
                </div>


                <button className="submit-party-button" onClick={()=>this.props.sendPartyInvite()}> Submit</button>

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

