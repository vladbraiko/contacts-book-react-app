import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  fetchContactError,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from './phoneBook-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const loadingReducer = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [fetchContactError]: setError,
  [addContactError]: setError,
  [deleteContactError]: setError,
});

export default combineReducers({
  items: items,
  filter: filter,
  error: error,
});
