import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.styled.module.css";

const Spinner = ({ loading }) => {
  return (
    <Loader
      className={styles.spinner}
      visible={loading}
      type="ThreeDots"
      color="white"
      height={80}
      width={80}
      timeout={1800}
    />
  );
};

export default Spinner;
