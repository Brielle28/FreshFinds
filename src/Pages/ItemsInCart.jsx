import ItemsInCartHeader from "../Components/ItemsInCart/ItemsInCartHeader";
import ItemsInCartList from "../Components/ItemsInCart/ItemsInCartList";
import Layout from "../Components/Layout";
const ItemsInCart = () => {
  return (
    <>
      <Layout>
        <div>
          <ItemsInCartHeader />
          <ItemsInCartList />
          {/* <Footer /> */}
        </div>
      </Layout>
    </>
  );
};

export default ItemsInCart;
