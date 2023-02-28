import Button from "../home/Components/UI/Button";
import styles from "./Form.module.css";

const Form = () => {
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: "left",
    });
  });
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    window.location.replace("./search");
  };
  return (
    <form className={styles.form}>
      <div className={styles.form__controls}>
        <div className={styles.form__control}>
          <label>
            <i className="fa fa-bed"></i>
          </label>
          <input type="text" placeholder="Where are you going?"></input>
        </div>
        <div className={styles.form__control}>
          <label>
            <i className="fa fa-calendar"></i>
          </label>
          {/* <input type="date" min="2019-01-01" max="2022-12-31"></input> */}
          <input
            type="text"
            name="daterange"
            value="01/24/2022 - 01/24/2022"
          ></input>
        </div>
        <div className={styles.form__control}>
          <label>
            <i className="fa fa-female"></i>
          </label>
          <input
            type="text"
            placeholder="1: adult - 0: children - 1: room"
          ></input>
        </div>
      </div>
      <div className={styles.form__actions}>
        <Button type="submit" onClick={searchSubmitHandler}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default Form;
