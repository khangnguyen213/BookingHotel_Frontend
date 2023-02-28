import styles from "./Hotel.module.css";

const Hotel = (props) => {
  const hotelDetailHandler = (e) => {
    e.preventDefault();
    window.location.replace("/detail");
  };
  return (
    <div
      className={styles.hotel__container}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <ul className={styles.hotel_infor}>
        <li className={styles.hotel_name} onClick={hotelDetailHandler}>
          {props.name}
        </li>
        <li className={styles.hotel_city}>{props.city}</li>
        <li className={styles.hotel_price}>Starting from ${props.price}</li>
        <li className={styles.hotel_rate}>
          <b>{props.rate}</b> Excellent
        </li>
      </ul>
    </div>
  );
};

export default Hotel;
