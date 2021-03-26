import { createAction } from "@reduxjs/toolkit";

const removeContact = createAction("contacts/remove-contact");
const changeFilter = createAction("contacts/change-filter");

// fecth contacts from data-base
const fecthContactsRequest = createAction("contacts/fecth-contacts");
const fecthContactsSuccess = createAction("contacts/fecth-contacts-success");
const fecthContactsError = createAction("contacts/fecth-contacts-failure");
//add new contact
const addContactRequest = createAction("contacts/add-contacts");
const addContactSuccess = createAction("contacts/add-contacts-success");
const addContactError = createAction("contacts/add-contacts-failure");
// remove contact
const removeContactRequest = createAction("contacts/delete-contact-request");
const removeContactSuccess = createAction("contacts/delete-contact-success");
const removeContactError = createAction("contacts/delete-contact-error");
// errors

const setError = createAction("contacts/setError");
const resetError = createAction("contacts/resetError");

export {
  changeFilter,
  removeContact,
  fecthContactsRequest,
  fecthContactsSuccess,
  fecthContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  addContactRequest,
  addContactError,
  addContactSuccess,
  setError,
  resetError,
};
