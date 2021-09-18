import { Component } from "react";
import ContactList from "./component/Contacts/ContactList";
import { v4 as uuidv4 } from "uuid";
import Form from "./component/Form/Form";
import Filter from "./component/Filter/Filter";
import css from "./App.css";


export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

    componentDidMount() {
    
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const duplicate = this.state.contacts.find(
      (contact) => contact.nametoLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

   changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

 
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
      this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const VisibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1 className={css}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={css}>Contacts</h2>
        {this.state.contacts.length === 0 ? null :
          <Filter value={filter} onChange={this.changeFilter}
          />}
        {this.state.contacts.length===0? <p> No contacts</p> :
          <ContactList
          contacts={VisibleContacts}
          onDeleteContact={this.deleteContact}
        />}
      </>
    );
  }
}