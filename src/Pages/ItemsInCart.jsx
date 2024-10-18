import ItemsInCartHeader from "../Components/ItemsInCart/ItemsInCartHeader";
import ItemsInCartList from "../Components/ItemsInCart/ItemsInCartList";
import Footer from "../Components/Footer/Footer"
const ItemsInCart = () => {
  return (
    <>
      <div>
        <ItemsInCartHeader />
        <ItemsInCartList />
        <Footer/>
      </div>
    </>
  );
};

export default ItemsInCart;
