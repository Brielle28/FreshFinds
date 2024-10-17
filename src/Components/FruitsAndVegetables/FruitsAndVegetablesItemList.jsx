import CartItemCard from "../CartItems/CartItemCard";
import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const FruitsAndVegetablesItemList = () => {
  const { likeArray, setLikeArray, cartItems, addToCart } = useContext(UserContext);

  return (
    <div className="grid grid-cols-2 gap-2 pt-[100px] md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
      {FruitsAndVegetablesItem.map((item) => (
        <CartItemCard
          key={item.id}
          item={item}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          likeArray={likeArray}
          setLikeArray={setLikeArray}
          cartItems={cartItems}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default FruitsAndVegetablesItemList;