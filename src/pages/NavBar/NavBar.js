import styles from "./NavBar.module.css";
import Button from "../home/Components/UI/Button";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles[`nav-bar`]}>
      <div className={styles["nav-bar__top"]}>
        <h1 onClick={() => navigate("/")}>Booking Website</h1>
        <div className={styles["nav-bar__actions"]}>
          <Button onClick={() => navigate("/register")}>Register</Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      </div>
      {!props.notDisplay && (
        <div className={styles["nav-bar__bottom"]}>
          <ul>
            <div className={`${styles["nav-bar-item"]} ${styles.activated}`}>
              <li>
                <i className={`fa fa-bed`}></i>
                <p>Stays</p>
              </li>
            </div>
            <div className={`${styles["nav-bar-item"]} ${styles.activated}`}>
              <li>
                <i className={`fa fa-plane`}></i>
                <p>Flights</p>
              </li>
            </div>{" "}
            <div className={`${styles["nav-bar-item"]} ${styles.activated}`}>
              <li>
                <i className={`fa fa-car`}></i>
                <p>Car rentals</p>
              </li>
            </div>{" "}
            <div className={`${styles["nav-bar-item"]} ${styles.activated}`}>
              <li>
                <i className={`fa fa-bed`}></i>
                <p>Attractions</p>
              </li>
            </div>{" "}
            <div className={`${styles["nav-bar-item"]} ${styles.activated}`}>
              <li>
                <i className={`fa fa-taxi`}></i>
                <p>Airport taxis</p>
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
