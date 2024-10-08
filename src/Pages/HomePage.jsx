import Carousel from "../Components/HomePage/Carousel";
import Category from "../Components/HomePage/Category/Category";
import Footer from "../Components/HomePage/Footer/Footer";
import Header from "../Components/HomePage/Header";
// import Popular from "../Components/HomePage/Popular";
import Popular from "../Components/HomePage/Popular/Popular";
const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-[#]">
        <Header />
        <Carousel/>
        <Category/>
        <Popular/>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;