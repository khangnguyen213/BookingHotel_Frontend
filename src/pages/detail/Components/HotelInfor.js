import Button from "../../home/Components/UI/Button";
import styles from "./HotelInfor.module.css";

const HotelInfor = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>{props.name}</h1>
        <Button>Reverse or Book Now!</Button>
      </div>
      <p className={styles.address}>🔎{props.address}</p>
      <p className={styles.distance}>{props.distance}</p>
      <p className={styles.price}>{props.price}</p>
    </div>
  );
};

export default HotelInfor;
