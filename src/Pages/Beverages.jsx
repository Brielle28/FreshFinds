import BeveragesHeader from "../Components/Beverages/BeveragesHeader";
import Footer from "../Components/Footer/Footer";
import BeveragesItemsList from "../Components/Beverages/BeveragesItemsList";
import Layout from "../Components/Layout";

const Beverages = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <BeveragesHeader />
          <BeveragesItemsList />
        </div>
      </Layout>
    </>
  );
};

export default Beverages;
