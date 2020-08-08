import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactItem({ name, number, id, onDelete }) {
  return (
    <>
      {name}: {number}
      <button
        className={styles.remove_contact_btn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactItem;
