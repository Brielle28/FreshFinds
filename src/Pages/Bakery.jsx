import BakeryHeader from "../Components/Bakery/BakeryHeader";
import BakeryItemList from "../Components/Bakery/BakeryItemList";
import Layout from "../Components/Layout";

const Bakery = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <BakeryHeader />
          <BakeryItemList />
        </div>
      </Layout>
    </>
  );
};

export default Bakery;
