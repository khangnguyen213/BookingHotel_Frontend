import Result from "./Result";
import styles from "./SearchResults.module.css";

const SearchResults = (props) => {
  return (
    <ul className={styles.hotel_list}>
      {props.searchData.map((hotelData) => (
        <Result
          name={hotelData.name}
          distance={hotelData.distance}
          tag={hotelData.tag}
          type={hotelData.type}
          description={hotelData.description}
          freeCancel={hotelData.free_cancel}
          price={hotelData.price}
          rate={hotelData.rate}
          rateText={hotelData.rate_text}
          img={hotelData.image_url}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
