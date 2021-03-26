import React from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux//contacts/contacts-selectors";

const Filter = ({ handleChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        name="filter"
        type="text"
        placeholder="search contact"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;
