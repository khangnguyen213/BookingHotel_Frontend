import styles from "./FooterColItems.module.css";

const FooterColItems = (props) => {
  return (
    <div>
      <ul className={styles.items_container}>
        {props.values.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColItems;
