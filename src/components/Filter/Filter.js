import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ onChange }) {
  const idInput = nanoid();
  return (
    <>
      <form className={s.form}>
        <label htmlFor={idInput} className={s.label}>
          Find contacts by name
        </label>
        <input
          className={s.input}
          id={idInput}
          type="text"
          name="filter"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
