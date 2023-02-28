import { useNavigate } from "react-router-dom";
import Button from "../home/Components/UI/Button";
import Form from "./Form";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <h1>A life time of discounts? It's Genius.</h1>
      <p>
        Get rewards for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <Button onClick={() => navigate("/login")}>Sign in/Register</Button>
      <Form />
    </div>
  );
};

export default Header;
