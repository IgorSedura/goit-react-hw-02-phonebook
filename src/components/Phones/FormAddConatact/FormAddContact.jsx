import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Btn, Input, Label } from './FormAddConatctStyles';

export class FormAddPhone extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <Container>
          <div>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={handleChange}
              placeholder="Введіть ім'я"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <Label>Number</Label>
            <Input
              value={number}
              onChange={handleChange}
              placeholder="Введіть номер"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <Btn>Add to contact</Btn>
          </div>
        </Container>
      </form>
    );
  }
}

FormAddPhone.defaultProps = {
  onSubmit: () => {},
};

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func,
};
