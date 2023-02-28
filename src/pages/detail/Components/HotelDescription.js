import Button from "../../home/Components/UI/Button";
import styles from "./HotelDescription.module.css";

const HotelDescription = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.container_right}>
        <h1>Perfect for a 9-night stay!</h1>
        <p>
          Located in the real heart of Kralow, this property has an excellent
          location score at 9.8!
        </p>
        <b>${props.nine_night_price} (9 nights)</b>
        <Button>Reverse or Book Now!</Button>
      </div>
    </div>
  );
};

export default HotelDescription;
