import React, { Component } from 'react';
import './Send_Invite.scss';
import Header from '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updatePartyGuests, user } from '../../ducks/reducer';

class Send_Invite extends Component {

	constructor() {
		super();

		this.state = {
			emails: [],
			newEmail: '',
			user_Id: ''
		}
		this.addEmail = this.addEmail.bind(this)
		this.deleteEmail = this.deleteEmail.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		axios.get(`${process.env.BASE_URL}/auth/me`).then((response) => {
			console.log(response)
;			this.setState({
				user_Id: response.data.id
			})
		})
	}

	addEmail(item) {
		this.setState({
			emails: [...this.state.emails, item],
			newEmail: ''
		})
		console.log(this.state.emails)
	}

	deleteEmail(index) {
		var emailList = this.state.emails
		emailList.splice(index, 1)
		this.setState({
			emails:	emailList
			
		})
		console.log(this.state.emails)
	}

	handleChange(value) {
		this.setState({
			newEmail: value
		})
	}

	sendPartyInvite(){
		console.log('email_list', this.state.emails)
		console.log('user_Id', this.state.user_Id)
		console.log('party_Id', this.props.partyId)
		console.log('partyGuests', this.props.partyGuests)
		axios.post('/api/sendInvite', {
			email_list: this.state.emails,
		})
		.then(response => {
			console.log(response);
		})

	}

	render() {
		console.log(this.state.emails)
		
		const { updatePartyGuests } = this.props;

		var emailList = this.state.emails.map((e, i) => {
			return (
				<div className="email-display">
					<div className="email-address">
						<span>{e}</span>

					</div>
					<button onClick={() => this.deleteEmail(i)}>Delete</button>
				</div>
			)
		})



		return (
			<div id="send-invite">

				<div className="send-invite-container">
					<p>Send Invite</p>
					<div>
						Party Name : {this.props.partyName}
					</div>
					<div>
						Party Date : {this.props.partyDate}
					</div>

					<input value={this.state.newEmail} onChange={(e) => this.handleChange(e.target.value)} />

						<button className="add-email" onClick={() => this.addEmail(this.state.newEmail)}> Add Email</button>

					<Link to="/profile">
						<button className="submit-invite" onClick={() => this.sendPartyInvite(this.state.emails)}> Send Invite </button>
					</Link>

					<div>
						{emailList}
					</div>

				</div>


			</div>




		)
	}
}

function mapStateToProps(state) {
	const { partyName, partyDate, partyGuests, user, partyId } = state;

	return {
		partyName,
		partyDate,
		partyGuests,
		user,
		partyId

	}
}

let outputActions = {
	updatePartyGuests,
	

}

export default connect(mapStateToProps, outputActions)(Send_Invite);

