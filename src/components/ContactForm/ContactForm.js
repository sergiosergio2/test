import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Contact.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.inputNameId} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          id={this.inputNameId}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.inputNumberId} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          id={this.inputNumberId}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
