// import CartItemCard from "../CartItems/CartItemCard";
// import {BakeryItems} from "../../Utils/BakeryItem"
// import { useContext } from "react";
// import { UserContext } from "../Context/UserProvider";

// const BakeryItemList = () => {
//   const { likeArray } = useContext(UserContext); // Consume the likeArray from context

//   console.log(likeArray); // You can still log the liked items for debugging

//   return (
//     <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
//       {BakeryItems.map((item) => (
//         <CartItemCard
//           key={item.id}
//           item={item} // Pass the item details
//           imageUrl={item.imageUrl}
//           title={item.title}
//           price={item.price}
//         />
//       ))}
//     </div>
//   );
// };

// export default BakeryItemList;

import { useContext, useState } from "react";
import CartItemCard from "../CartItems/CartItemCard";
import { BakeryItems } from "../../Utils/BakeryItem";
import { UserContext } from "../Context/UserProvider";

const BakeryItemList = () => {
  const { likeArray, setLikeArray, cartItems, addToCart } = useContext(UserContext);

  return (
    <div className="grid grid-cols-2 gap-2 pt-[100px] md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
      {BakeryItems.map((item) => (
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

export default BakeryItemList;
