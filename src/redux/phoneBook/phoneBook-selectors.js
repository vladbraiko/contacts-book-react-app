import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, items) => {
    const filteredName = filter.toLowerCase();

    const visibleContacts = items.filter(item =>
      item.name.toLowerCase().includes(filteredName),
    );

    return visibleContacts;
  },
);
