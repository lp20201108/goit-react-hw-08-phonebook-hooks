import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../redux/auth/auth-operations";

const styles = {
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },

  container: {
    width: 320,
    margin: "0 auto",
    marginTop: 20,
  },

  title: {
    marginBottom: 15,
  },
  button: {
    margin: "0 auto",
    display: "flex",
    marginTop: 25,
  },
};

const initialState = {
  email: "",
  password: "",
};

export default function LogInView() {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn(state));
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Log in page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>

        <button style={styles.button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

//import { connect } from "react-redux";
// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogIn(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div style={styles.container}>
//         <h1 style={styles.title}>Log in page</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button style={styles.button} type="submit">
//             Log in
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogIn: logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
