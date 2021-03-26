import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { register } from "../redux/auth/auth-operations";

const styles = {
  form: {
    width: 320,
  },
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
  name: "",
  email: "",
  password: "",
};

export default function RegisterView() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;

  //     case "password":
  //       setPassword(value);
  //       break;
  //     default:
  //       console.warn(`Error`);
  //   }
  // };

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
    dispatch(register(state));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>

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
          Register
        </button>
      </form>
    </div>
  );
}

// import { connect } from "react-redux";
//import { register } from "../redux/auth/auth-operations";
//class RegisterView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div style={styles.container}>
//         <h1 style={styles.title}>Register</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

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
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
