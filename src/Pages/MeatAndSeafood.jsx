import Layout from "../Components/Layout";
import MeatAndSeafoodHeader from "../Components/MeatAndSeafood/MeatAndSeafoodHeader";
import MeatAndSeafoodItemList from "../Components/MeatAndSeafood/MeatAndSeafoodItemList";

const MeatAndSeafood = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <MeatAndSeafoodHeader />
          <MeatAndSeafoodItemList />
        </div>
      </Layout>
    </>
  );
};

export default MeatAndSeafood;
