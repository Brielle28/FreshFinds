import FrozenFoodsHeader from "../Components/FrozenFoods/FrozenFoodsHeader";
import FrozenFoodsItemsList from "../Components/FrozenFoods/FrozenFoodsItemsList";
import Layout from "../Components/Layout";

const FrozenFoods = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <FrozenFoodsHeader />
          <FrozenFoodsItemsList />
        </div>
      </Layout>
    </>
  );
};

export default FrozenFoods;
