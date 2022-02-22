import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import s from './ContactList.module.css';

function ContactList({ filter, bookContacts, deleteContact }) {
  console.log(bookContacts);
  console.log(filter);
  const filterItem = name =>
    name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  return (
    <ul>
      {bookContacts.map(({ id, name, number }) => {
        console.log(id);
        return (
          filterItem(name) && (
            <ListItem key={id} name={name} number={number} id={id}>
              <button data-id={id} onClick={deleteContact} className={s.button}>
                Delete
              </button>
            </ListItem>
          )
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  bookContacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
export default ContactList;
