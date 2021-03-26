import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "black",
  },
  activeLink: {
    color: "rgb(255,64,71)",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
