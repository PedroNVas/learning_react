import React, {Component} from 'react';
import ListContacts from './ListContacts'

/* Updating state

You should you a function in setState when the current state depends on the previous one

this.setState((prevState) => ({
	count: prevState.count + 1
}))

You should use an object whenever else
this.setState({
	username: 'Tyler'
})

 */

/*
 DON'T EVER USE PROPS WHEN INITIATING A STATE

 this.state = {
    user: props.user
 }

 */
class App extends Component {
	state = {
		contacts: [
			{
				"id": "ryan",
				"name": "Ryan Florence",
				"email": "ryan@reacttraining.com",
				"avatarURL": "http://localhost:5001/ryan.jpg"
			},
			{
				"id": "michael",
				"name": "Michael Jackson",
				"email": "michael@reacttraining.com",
				"avatarURL": "http://localhost:5001/michael.jpg"
			},
			{
				"id": "tyler",
				"name": "Tyler McGinnis",
				"email": "tyler@reacttraining.com",
				"avatarURL": "http://localhost:5001/tyler.jpg"
			}
		]
	};

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))
	};

	render() {
		return (
			<div>
				<ListContacts
					onDeleteContact={this.removeContact}
					contacts={this.state.contacts}/>
			</div>
		)
	}
}

export default App;