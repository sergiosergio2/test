import React from 'react';
import PropTypes from 'prop-types';
import s from './ListItem.module.css';

function ListItem({ name, number, children }) {
  return (
    <li className={s.contactItem}>
      <p className={s.item}>
        {name} : {number}
      </p>
      {children}
    </li>
  );
}
ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ListItem;
