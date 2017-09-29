import React, { Component } from 'react';
import './Review_Event.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updatePartyName, updatePartyDescription, updatePartyDate, 
         updatePartyLocation, updatePartyAddress, updatePartyDecorations,
         updatePartySupplies, updatePartyFood, updatePartyGuests, setPartyId
         } from '../../ducks/reducer';

class Review_Event extends Component {

    constructor(){
        super();
        
        this.state = {
            edit: false,
            partyDetails: {}
        }
    }

    componentDidMount(){
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
        this.setState({partyDetails:partyDetails})

        
    }

    hostCreateParty(partyDetails) {
        console.log(this.props)
       return axios.post('/api/createParty?id=' + this.props.user.id, partyDetails).then(response => {
           console.log("partyid response: ", response);
            this.props.setPartyId(response.data.id);
        })

    }

   

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
            <div id="review-event">
                {!this.state.edit ? 
            
            <div className="review-event-container">
               <p> Review Event</p>
               
               <div className="party-container">
                    
                <div className="partyNameDiv">
                    Party Name :
                    <input defaultValue= {this.props.partyName} />
                </div>

                <div className="partyDateDiv">
                    Date :
                    <input defaultValue= {this.props.partyDate} />
                </div>
                
                <div className="partyLocationDiv">
                    Location :
                    <input defaultValue= {this.props.partyLocation} />
                </div>
                
                <div className="partyAddressDiv">
                    Address :
                    <input defaultValue= {this.props.partyAddress} />
                </div>
                
                <div className="descriptionAreaDiv">
                    Party Description :
                    <input defaultValue= {this.props.partyDescription} />
                </div>
                
                <div className="decorationsAreaDiv">
                    Decorations :
                    <input defaultValue= {this.props.partyDecorations} />
                </div>
                
                <div className="suppliesAreaDiv">
                    Supplies :
                    <input defaultValue= {this.props.partySupplies} />
                </div>
                
                <div className="foodAreaDiv">
                    Food :
                <input defaultValue= {this.props.partyFood} />
                </div>
                </div>
            <div>
                <button className="edit-party-button" onClick={() => {
                    this.setState({
                        edit: !this.state.edit
                    })
                    console.log(this.state.edit)
                    
                    }}> Edit</button>
                
              <Link to="/send_invite">
            <button className="confirm-party-button" onClick={() =>this.hostCreateParty (this.state.partyDetails)}  > Confirm</button>
            </Link>
            </div>
                
            </div>
                
                :
                
            <div className="edit-event-container">
                <p> Edit Event</p>

            <div className="party-container">

                <div className="partyNamEditDiv">
                    Party Name :
                    <input placeholder= {this.props.partyName} type="text" onChange={ ( e ) => updatePartyName( e.target.value ) } />
                </div>

                <div className="dateEditDiv">
                    Date :
                    <input placeholder= {this.props.partyDate} type="text" onChange={ ( e ) => updatePartyDate( e.target.value ) } />  
                </div>
                
                <div className="locationEditDiv">
                    Location :
                    <input placeholder={this.props.partyLocation} type="text" onChange={ ( e ) => updatePartyLocation( e.target.value ) } />  
                </div>
                
                <div className="addressEditDiv">
                    Address :
                    <input placeholder={this.props.partyAddress} type="text" onChange={ ( e ) => updatePartyAddress( e.target.value ) } />  
                </div>
                
                <div className="descriptionEditDiv">
                    Party Description :
                    <textarea placeholder={this.props.partyDescription} type="text" onChange={ ( e ) => updatePartyDescription( e.target.value ) } />  
                </div>
                
                <div className="decorationsEditDiv">
                    Decorations :
                    <textarea placeholder={this.props.partyDecorations} type="text" onChange={ ( e ) => updatePartyDecorations( e.target.value ) } /> 
                </div>
                
                <div className="suppliesEditDiv">
                    Supplies :
                    <textarea placeholder={this.props.partySupplies} type="text" onChange={ ( e ) => updatePartySupplies( e.target.value ) } /> 
                </div>
                
                <div className="foodEditDiv">
                    Food :
                    <textarea placeholder={this.props.partyFood} type="text" onChange={ ( e ) => updatePartyFood( e.target.value ) } /> 
                </div>
            </div>
            <div>
                <button className="save-party-button" onClick={() => {
                    this.setState({
                        edit: !this.state.edit
                    })
                    console.log(this.state.edit)
                    
                    }}> Save</button>
                
                
            </div>
            
            </div>
            
            }
                
            </div> 
        )
        
    }
}

function mapStateToProps(state) {
    const { partyName, partyDescription, partyDate, partyLocation, partyAddress, partyDecorations,
            partySupplies, partyFood, partyGuests, partyInvite, user } = state;
  
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
        partyInvite,
        user
   
   
    
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
    setPartyId
}

export default connect (mapStateToProps, outputActions) (Review_Event); 

