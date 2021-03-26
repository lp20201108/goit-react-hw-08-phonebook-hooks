import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contact.name, contact.number);

    const oldContactName = contacts.find((item) => item.name === contact.name);

    const oldContactNumber = contacts.find(
      (item) => item.number === contact.number
    );

    if (oldContactName) {
      alert(
        `This contact NAME already exists
         as Name:${oldContactName.name} Tel:${oldContactName.number}`
      );
      return;
    } else if (oldContactNumber) {
      alert(
        `This contact NUMBER already exists as
         Tel:${oldContactNumber.number} Name:${oldContactNumber.name}`
      );
      return;
    } else if (!contact.name) {
      alert("Please, enter the contact name");
      return;
    } else if (!contact.number) {
      alert("Please, enter the contact number");
      return;
    }

    dispatch(
      addContact({
        name: contact.name,
        number: contact.number,
      })
    );

    setContact({
      name: "",
      number: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor="name" className={styles.label}>
        Name
        <input
          name="name"
          type="text"
          className={styles.contactInput}
          placeholder="insert name"
          onChange={handleChange}
          value={contact.name}
        />
      </label>
      <label htmlFor="number" className={styles.label}>
        Number
        <input
          name="number"
          type="text"
          className={styles.contactInput}
          placeholder="insert number"
          onChange={handleChange}
          value={contact.number}
        />
      </label>

      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
