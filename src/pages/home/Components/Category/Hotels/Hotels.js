import styles from "./Hotels.module.css";
import hotelsData from "../data/hotel_list.json";
import Hotel from "./Hotel";
console.log(hotelsData);

const Hotels = () => {
  return (
    <div>
      <h1 className={styles.label}>Homes guests love</h1>
      <div className={styles.hotels__container}>
        {hotelsData.map((hotel) => (
          <Hotel
            key={hotel.name}
            name={hotel.name}
            price={hotel.price}
            rate={hotel.rate}
            subText={hotel.subText}
            img={hotel.image_url}
            city={hotel.city}
          />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
