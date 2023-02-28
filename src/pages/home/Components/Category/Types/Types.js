import styles from "./Types.module.css";
import typesData from "../data/type.json";
import Type from "./Type";
console.log(typesData);

const Types = () => {
  return (
    <div>
      <h1 className={styles.label}>Browse by property type</h1>
      <div className={styles.types__container}>
        {typesData.map((type) => (
          <Type
            key={type.name}
            name={type.name}
            count={type.count}
            img={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Types;
