import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CreateContact from './CreateContact'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContatcsAPI'

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
    contacts: []
  }

  componentDidMount () {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts: contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContact (contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contact: state.contacts.concat([contact])
      }))
    })
  }

  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />
        )}/>
        <Route path='/create' render={({history}) => (
          <CreateContact onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}/>
        )}/>
      </div>
    )
  }
}

export default App