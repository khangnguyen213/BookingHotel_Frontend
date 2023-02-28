import styles from "./Category.module.css";
import Cities from "./Cities/Cities";
import Types from "./Types/Types";
import Hotels from "./Hotels/Hotels";

const Category = () => {
  return (
    <div className={styles.category}>
      <Cities />
      <Types />
      <Hotels />
    </div>
  );
};

export default Category;
