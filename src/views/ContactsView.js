import React from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';

const ContactsView = () => (
  <>
    <div>
      <ContactForm />
    </div>
    <Filter />
    <div>
      <ContactList />
    </div>
  </>
);

export default ContactsView;
