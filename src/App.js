import React from 'react';
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { Container, Header, Segment, Icon, Button, } from "semantic-ui-react";

class App extends React.Component {
  state = { contacts: [], showForm: true, };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, };
    this.setState({ contacts: [...this.state.contacts, contact], });
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact;
    })
   this.setState({ contacts, });
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    return (
      <Container style={{ paddingTop: "25px", }}>
        <Header as="h1" color="purple">React Contact List</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? "angle double up" : "angle double down"} />
          </Button>
          { this.state.showForm ? <ContactForm add={this.addContact} /> : null }        
        </Segment>
        <br />
        <Contacts 
          contactList={this.state.contacts} 
          remove={this.removeContact} 
        />
      </Container>
    )
  }
}

export default App;
