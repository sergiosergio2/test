import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = data => {
    if (
      !this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...data, id: nanoid() }],
      }));
      return true;
    } else {
      alert(`${this.state.contacts.name} is already in contacts.`);
    }
  };
  deleteContact = evt => {
    console.log(evt);
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== evt.target.dataset.id,
      ),
    });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="phoneBook">
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        {console.log(this.state.contacts)}
        <ContactList
          bookContacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
