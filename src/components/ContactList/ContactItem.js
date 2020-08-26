import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactItem({ name, number, id, onDelete }) {
  return (
    <span className={styles.contact}>
      {name}: {number}
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </span>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactItem;
