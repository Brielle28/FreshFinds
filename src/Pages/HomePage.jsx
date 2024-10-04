import Carousel from "../Components/HomePage/Carousel";
import Category from "../Components/HomePage/Category";
import Header from "../Components/HomePage/Header";
const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-[#]">
        <Header />
        <Carousel/>
        <Category/>
      </div>
    </>
  );
};

export default HomePage;
