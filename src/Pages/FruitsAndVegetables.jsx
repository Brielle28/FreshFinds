import Footer from "../Components/Footer/Footer";
import FruitsAndVegetablesHeader from "../Components/FruitsAndVegetables/FruitsAndVegetablesHeader";
import FruitsAndVegetablesItemList from "../Components/FruitsAndVegetables/FruitsAndVegetablesItemList";
import Layout from "../Components/Layout";

const FruitsAndVegetables = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <FruitsAndVegetablesHeader />
        <FruitsAndVegetablesItemList />
      </div>
    </Layout>
  );
};

export default FruitsAndVegetables;
