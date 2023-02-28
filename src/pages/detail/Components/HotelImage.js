import styles from "./HotelImage.module.css";

const HotelImage = (props) => {
  return (
    <div className={styles.images_container}>
      {props.images.map((image) => (
        <img src={image} key={image}></img>
      ))}
    </div>
  );
};

export default HotelImage;
