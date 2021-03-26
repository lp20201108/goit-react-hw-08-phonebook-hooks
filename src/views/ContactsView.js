import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter/Filter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../components/App.module.css";
import { fecthContacts } from "../redux/contacts/contacts-operations";
import {
  getVisibleContacts,
  getLoading,
} from "../redux/contacts/contacts-selectors";
import Spinner from "../components/Spinner/Spinner";

import { useDispatch, useSelector } from "react-redux";

const ContactsView = () => {
  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthContacts());
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts list</h2>
      {!!contacts.length && <Filter />}
      <ContactsList contacts={contacts} />
      <Spinner loading={loading} />
    </div>
  );
};

export default ContactsView;
