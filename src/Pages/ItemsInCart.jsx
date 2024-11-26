import ItemsInCartHeader from "../Components/ItemsInCart/ItemsInCartHeader";
import ItemsInCartList from "../Components/ItemsInCart/ItemsInCartList";
import Layout from "../Components/Layout";
const ItemsInCart = () => {
  return (
    <>
      <Layout>
        <div className="h-screen bg-white">
          <ItemsInCartHeader />
          <ItemsInCartList />
        </div>
      </Layout>
    </>
  );
};

export default ItemsInCart;
