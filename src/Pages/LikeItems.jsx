import LikeItemsHeader from "../Components/LikeItems/LikeItemsHeader";
import LikedItems from "../Components/LikeItems/LikedItems";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout";
const LikeItems = () => {
  return (
    <>
      <Layout>
        <LikeItemsHeader />
        <LikedItems />
      </Layout>
    </>
  );
};

export default LikeItems;
