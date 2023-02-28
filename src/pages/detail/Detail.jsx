import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import HotelInfor from "./Components/HotelInfor";
import HotelImage from "./Components/HotelImage";
import HotelDescription from "./Components/HotelDescription";
import HotelData from "./hotel_detail.json";

const Detail = () => {
  return (
    <div>
      <NavBar />
      <HotelInfor
        name={HotelData.name}
        address={HotelData.address}
        distance={HotelData.distance}
        price={HotelData.price}
      />
      <HotelImage images={HotelData.photos} />
      <HotelDescription
        title={HotelData.title}
        description={HotelData.description}
        nine_night_price={HotelData.nine_night_price}
      />
      <Footer />
    </div>
  );
};

export default Detail;
