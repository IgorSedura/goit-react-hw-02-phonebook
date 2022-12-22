import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { FormAddPhone } from './FormAddConatact/FormAddContact';
import { PhonebookList } from './ContactBookList/ContactBookList';
import { Container } from './PhonesStyles';


export class Phones extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addPhone = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      const newPhone = {
        id: nanoid(),
        ...data,
      };

      return {
        contacts: [...prevState.contacts, newPhone],
      };
    });
  };
  removeContacts = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return { contacts: newContacts };
    });
  };
  handleFilter = e => {
    const filterStr = e.target.value;

    this.setState({
      filter: filterStr,
    });
  };

  getFilterContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    const normolizedFilter = filter.toLocaleLowerCase();

    const filtredContacts = contacts.filter(({ name, number }) => {
      const normolizedName = name.toLocaleLowerCase();
      const normolizedNumber = number.toLocaleLowerCase();
      const result =
        normolizedName.includes(normolizedFilter) ||
        normolizedNumber.includes(normolizedFilter);
      return result;
    });

    return filtredContacts;
  }
  render() {
    const contacts = this.getFilterContacts();
    const { addPhone, removeContacts } = this;
    return (
      <Container>
        <FormAddPhone onSubmit={addPhone} />
        <Filter handleFilter={this.handleFilter} />
        <PhonebookList items={contacts} removeContacts={removeContacts} />
      </Container>
    );
  }
}
