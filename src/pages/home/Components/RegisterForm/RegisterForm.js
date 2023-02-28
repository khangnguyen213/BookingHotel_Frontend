import Button from "../UI/Button";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.register_form}>
      <h1>Save time, save money!</h1>
      <p>Sign up and we will send the best deals to you</p>
      <form>
        <input type="text" placeholder="Your email" />
        <Button type="submit">Subcribe</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
