import Category from "./Components/Category/Category";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Category />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Home;
