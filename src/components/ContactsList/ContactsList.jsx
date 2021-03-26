import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactsList = ({ contacts }) => {
  // if (!contacts.length) {
  //   return <p className={styles.message}>Phonebook is empty!</p>;
  // }

  return (
    <ul className="contactsList">
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
