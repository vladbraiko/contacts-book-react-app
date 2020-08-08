import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/phoneBook/phoneBook-operations';
import { getFilteredContacts } from '../../redux/phoneBook/phoneBook-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { filteredContacts, onDelete } = this.props;
    return (
      <ul>
        {filteredContacts.map(item => (
          <li key={item.id} className={styles.contact}>
            <ContactItem
              name={item.name}
              number={item.number}
              onDelete={onDelete}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.sting,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => ({
  filteredContacts: getFilteredContacts(state),
});

const mapDispatchtoProps = {
  onDelete: deleteContact,
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
