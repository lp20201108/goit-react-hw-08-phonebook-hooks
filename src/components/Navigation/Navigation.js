import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "black",
  },
  activeLink: {
    color: " rgb(255,64,71)",
  },
};

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          My Contacts
        </NavLink>
      )}
    </nav>
  );
};
// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

export default Navigation;
