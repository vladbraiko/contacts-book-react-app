import React from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';

const ContactsView = () => (
  <>
    <Filter />
    <div>
      <ContactList />
    </div>
    <div>
      <ContactForm />
    </div>
  </>
);

export default ContactsView;
