import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import sortBy from 'sort-by'

/* Stateless Functional Component

If your component only has a render method it can actually be just a function.
instead of 'class ListContacts extends Component

* Takes in props as the first (and only) argument
* Returns description of UI
* No 'this' keyword

function ListContacts(props) {
	return (
		<ol className='contact-list'>
			{props.contacts.map(contact => (
				<li key={contact.id} className='contact-list-item'>
					<div className='contact-avatar' style={{
						backgroundImage: `url(${contact.avatarURL})`
					}}/>
					<div className='contact-details'>
						<p>{contact.name}</p>
						<p>{contact.email}</p>
					</div>
					<button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
						Remove
					</button>
				</li>
			))}
		</ol>
	)
}

ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
};

*/

// const ListExample = (props) => (
// 	<div>
// 		{props.text}
// 	</div>
// );

class ListContacts extends Component {

	// PropTypes can be an attribute (make it static)
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	};

	/*
		componentWillMount()

		Invoked immediately before the component is inserted into the DOM
	 */

	/*
		componentDidMount()

		Invoked immediately after the component is inserted into the DOM

		Good to:
		* Load external data
		* Change a state (which will cause a re-render)
	 */

	/*
		componentWillUnmount()

		Invoked immediately before the component is removed from the DOM
	 */

	/*
		componentWillReceiveProps()

		Always invoked whenever the component is about to receive new props
	 */

	state = {
		query: ''
	};

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	};

	clearQuery = () => {
		this.setState({query: ''})
	};

	render() {
		const {contacts, onDeleteContact} = this.props;
		const {query} = this.state;

		let showingContacts;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingContacts = contacts.filter(contact => match.test(contact.name))
		} else {
			showingContacts = contacts
		}

		showingContacts.sort(sortBy('name'));

		return (
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input
						className='search-contacts'
						type='text'
						placeholder='Search contacts'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>

				{showingContacts.length !== contacts.length && (
					<div className='showing-contacts'>
						<span>Now showing {showingContacts.length} of {contacts.length} total</span>
						<button onClick={this.clearQuery}>Show all</button>
					</div>
				)}

				<ol className='contact-list'>
					{showingContacts.map(contact => (
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{
								backgroundImage: `url(${contact.avatarURL})`
							}}/>
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={() => onDeleteContact(contact)} className='contact-remove'>
								Remove
							</button>
						</li>
					))}
				</ol>
			</div>
		)
	}

}


export default ListContacts