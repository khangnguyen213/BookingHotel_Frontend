import styles from "./Cities.module.css";
import citiesData from "../data/city.json";
import City from "./City";
console.log(citiesData);

const Cities = () => {
  return (
    <div className={styles.cities__container}>
      {citiesData.map((city) => (
        <City
          key={city.name}
          name={city.name}
          subText={city.subText}
          img={city.image}
        />
      ))}
    </div>
  );
};

export default Cities;
