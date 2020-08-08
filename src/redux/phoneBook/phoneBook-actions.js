import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  'phoneBook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phoneBook/fetchContactSuccess',
);
export const fetchContactError = createAction('phoneBook/fetchContactError');

export const addContactRequest = createAction('phoneBook/addContactRequest');
export const addContactSuccess = createAction('phoneBook/addContactSuccess');
export const addContactError = createAction('phoneBook/addContactError');

export const deleteContactRequest = createAction(
  'phoneBook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phoneBook/deleteContactSuccess',
);
export const deleteContactError = createAction('phoneBook/deleteContactError');

export const filterContacts = createAction('phoneBook/filterContacts');
