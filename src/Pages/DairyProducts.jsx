import DairyProductsHeader from "../Components/DairyProducts/DairyProductsHeader";
import DairyProductsItemsList from "../Components/DairyProducts/DairyProductsItemsList";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout";
const DairyProducts = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <DairyProductsHeader />
          <DairyProductsItemsList />
        </div>
      </Layout>
    </>
  );
};

export default DairyProducts;
