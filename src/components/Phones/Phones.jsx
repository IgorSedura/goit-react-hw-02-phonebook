import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormAddPhone } from './FormAddPhone/FormAddPhone';
import { PhonebookList } from './PhonebookList/PhonebookList';
export class Phones extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  addPhone = data => {
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
  render() {
    const { contacts } = this.state;
    const { addPhone, removeContacts } = this;
    return (
      <div>
        <FormAddPhone onSubmit={addPhone} />
        <PhonebookList items={contacts} removeContacts={removeContacts} />
      </div>
    );
  }
}
