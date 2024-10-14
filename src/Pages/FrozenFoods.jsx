import Footer from "../Components/Footer/Footer";
import FrozenFoodsHeader from "../Components/FrozenFoods/FrozenFoodsHeader";
import FrozenFoodsItemsList from "../Components/FrozenFoods/FrozenFoodsItemsList";

const FrozenFoods = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <FrozenFoodsHeader />
        <FrozenFoodsItemsList/>
        <Footer />
      </div>
    </>
  );
};

export default FrozenFoods;
