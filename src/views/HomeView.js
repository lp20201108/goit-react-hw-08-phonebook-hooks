import React from "react";
import home from "../images/home.webp";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },

  image: {
    display: "block",
    margin: "0 auto",
    height: "100vh",
    width: "auto",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to our home page!</h1>
    <img style={styles.image} src={home} />
  </div>
);

export default HomeView;
