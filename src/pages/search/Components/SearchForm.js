import Button from "../../home/Components/UI/Button";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: "left",
    });
  });
  return (
    <div className={styles.form_container}>
      <h1>Search</h1>
      <form className={styles.form_controls}>
        <label>Destination</label>
        <input type="text"></input>
        <label>Check-in Date</label>
        <input
          type="text"
          name="daterange"
          value="01/24/2022 - 01/24/2022"
        ></input>
        <label>Options</label>
        <ul>
          <li>
            <label>Min price per night</label> <input type="number"></input>
          </li>
          <li>
            <label>Max price per night</label> <input type="number"></input>
          </li>
          <li>
            <label>Adult</label>{" "}
            <input type="number" min={1} step={1} placeholder={1}></input>
          </li>
          <li>
            <label>Children</label>{" "}
            <input type="number" min={0} step={1} placeholder={0}></input>
          </li>
          <li>
            <label>Room</label>{" "}
            <input type="number" min={1} step={1} placeholder={1}></input>
          </li>
        </ul>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchForm;
