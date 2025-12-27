import Carousel from "../Components/HomePage/Carousel";
import Category from "../Components/HomePage/Category/Category";
import Header from "../Components/HomePage/Header";
import Popular from "../Components/HomePage/Popular/Popular";
import Layout from "../Components/Layout";
const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full bg-white pb-20 sm:pb-24 md:pb-28">
          <Header />
          <Carousel />
          <Category />
          <Popular />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
