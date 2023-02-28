import styles from "./Result.module.css";
import Button from "../../home/Components/UI/Button";

const Result = (props) => {
  return (
    <li className={styles.result_container}>
      <div
        className={styles.result_left}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className={styles.result_mid}>
        <h1>{props.name}</h1>
        <h2>{props.distance} from center</h2>
        <h3>{props.tag}</h3>
        <h4>{props.description}</h4>
        <h5>{props.type}</h5>
        <h6>{props.freeCancel && "Free Cancellation"}</h6>
        <h7>
          {props.freeCancel &&
            "You can cancel later, so lock in this great price today"}
        </h7>
      </div>
      <div className={styles.result_right}>
        <div className={styles.top_right}>
          <p>{props.rateText}</p>
          <b>{props.rate}</b>
        </div>
        <div className={styles.bottom_right}>
          <h1>${props.price}</h1>
          <p>Includes taxes and fees</p>
          <Button>See availability</Button>
        </div>
      </div>
    </li>
  );
};

export default Result;
