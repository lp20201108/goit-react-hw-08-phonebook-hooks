import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";
import { removeContact } from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactListItem}>
      <span className="contactName">{name}</span>
      <span className="contactNumber"> {number}</span>
      <button
        onClick={() => dispatch(removeContact(id))}
        className={styles.btnRemove}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
