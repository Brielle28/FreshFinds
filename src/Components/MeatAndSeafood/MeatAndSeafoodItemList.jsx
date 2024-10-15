import CartItemCard from "../CartItems/CartItemCard";
import {MeatAndSeafoodItems} from "../../Utils/MeatAndSeafoodItems"
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const MeatAndSeafoodItemList = () => {
  const { likeArray, setLikeArray } = useContext(UserContext); // Consume the likeArray from context

  console.log(likeArray); // You can still log the liked items for debugging

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
      {MeatAndSeafoodItems.map((item) => (
        <CartItemCard
          key={item.id}
          item={item} // Pass the item details
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          likeArray={likeArray} // Missing in DairyProductsItemsList
          setLikeArray={setLikeArray}
        />
      ))}
    </div>
  );
};

export default MeatAndSeafoodItemList;


