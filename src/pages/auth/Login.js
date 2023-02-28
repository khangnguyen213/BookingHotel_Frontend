import NavBar from "../NavBar/NavBar";
import styles from "./auth.module.css";

const Login = () => {
  return (
    <div>
      <NavBar notDisplay={true} />
      <div className={styles.container}>
        <h1>LOGIN</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
