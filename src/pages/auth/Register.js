import NavBar from "../NavBar/NavBar";
import styles from "./auth.module.css";

const Register = () => {
  return (
    <div>
      <NavBar notDisplay={true} />
      <div className={styles.container}>
        <h1>REGISTER</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Email" />

          <button>Create new account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
