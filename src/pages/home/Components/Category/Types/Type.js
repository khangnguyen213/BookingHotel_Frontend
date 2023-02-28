import styles from "./Type.module.css";

const Type = (props) => {
  return (
    <div
      className={styles.type__container}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h1>{props.name}</h1>
      <p>{props.count}</p>
    </div>
  );
};

export default Type;
