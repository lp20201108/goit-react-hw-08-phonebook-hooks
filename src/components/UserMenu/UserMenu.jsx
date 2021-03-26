import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../images/default-img.png";
import { logOut } from "../../redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  const onLogout = () => dispatch(logOut());

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
