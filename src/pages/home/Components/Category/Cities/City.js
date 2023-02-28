import styles from "./City.module.css";

const City = (props) => {
  return (
    <div
      className={styles.city__container}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h1>{props.name}</h1>
      <p>{props.subText}</p>
    </div>
  );
};

export default City;
