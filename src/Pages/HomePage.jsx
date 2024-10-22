import Carousel from "../Components/HomePage/Carousel";
import Category from "../Components/HomePage/Category/Category";
import Header from "../Components/HomePage/Header";
import Popular from "../Components/HomePage/Popular/Popular";
import Layout from "../Components/Layout";
const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col items-center justify-center bg-[#]">
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
