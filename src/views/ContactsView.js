import React from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import styles from './ContactsView.module.css';

const ContactsView = () => (
  <div className={styles.container}>
    <div>
      <ContactForm />
    </div>
    <div className={styles.aside}>
      <Filter />
      <div className={styles.contactsList}>
        <ContactList />
      </div>
    </div>
  </div>
);

export default ContactsView;
