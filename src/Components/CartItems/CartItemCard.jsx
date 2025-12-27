import AddToCart from "./AddToCart";
import CartItemLike from "./CartItemLike";
import { Link } from "react-router-dom";

const CartItemCard = ({
  imageUrl,
  title,
  price,
  item,
  likeArray,
  setLikeArray,
  cartItems,
  addToCart,
  sectionName
}) => {
  const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

  return (
    <div className="w-full my-2 sm:my-3 md:my-4 lg:my-5 bg-white">
      <div className="flex flex-col items-start justify-center bg-white gap-1.5 sm:gap-2 p-1.5 sm:p-2 md:p-2.5 shadow-lg sm:shadow-xl md:shadow-2xl rounded-xl sm:rounded-[15px] w-full relative hover:shadow-2xl transition-shadow">
        <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-xl sm:rounded-t-[15px] w-full">
          {/* Like button outside of Link */}
          <CartItemLike
            item={item}
            likeArray={likeArray}
            setLikeArray={setLikeArray}
          />
          {/* Add to Cart button */}
          <AddToCart
            item={item}
            itemInCart={itemInCart}
            addToCart={addToCart}
          />
          {/* Link only wraps the image and text content */}
          <Link to={`/${sectionName}/${item.id}`} className="flex items-center justify-center w-full">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </Link>
        </div>
        <Link to={`/${sectionName}/${item.id}`} className="w-full px-1">
          <div className="flex flex-col items-start justify-start w-full gap-1 sm:gap-1.5 md:gap-2">
            <h4 className="font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] line-clamp-2">{title}</h4>
            <h3 className="text-green-500 font-bold text-[10px] sm:text-xs md:text-sm lg:text-[13px]">
              {price} <span className="text-black font-light text-[8px] sm:text-[9px] md:text-[10px]">/KG</span>
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartItemCard;

// import React from 'react';
// import AddToCart from "./AddToCart";
// import CartItemLike from "./CartItemLike";
// import { Link } from "react-router-dom";

// const CartItemCard = ({
//   imageUrl,
//   title,
//   price,
//   item,
//   likeArray,
//   setLikeArray,
//   cartItems,
//   addToCart,
//   sectionName
// }) => {
//   const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

//   return (
//     <div className="w-full my-5 bg-white h-96">
//       <div className="flex flex-col items-start justify-between bg-white p-2 shadow-2xl rounded-[15px] w-full h-full">
//         <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full h-52">
//           <CartItemLike
//             item={item}
//             likeArray={likeArray}
//             setLikeArray={setLikeArray}
//           />
//           <Link to={`/${sectionName}/${item.id}`} className="flex items-center justify-center w-full">
//             <div
//               className="w-32 h-32 bg-center bg-no-repeat bg-contain md:h-40 md:w-40"
//               style={{ backgroundImage: `url(${imageUrl})` }}
//             />
//           </Link>
//         </div>
        
//         <Link to={`/${sectionName}/${item.id}`} className="flex-1 w-full">
//           <div className="flex flex-col items-start justify-start w-full h-24 py-2">
//             <h4 className="font-extrabold text-[20px] line-clamp-2">{title}</h4>
//             <h3 className="text-green-500 font-bold text-[13px] mt-2">
//               {price} <span className="text-black font-light text-[10px]">/KG</span>
//             </h3>
//           </div>
//         </Link>
        
//         <div className="w-full">
//           <AddToCart
//             item={item}
//             itemInCart={itemInCart}
//             addToCart={addToCart}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItemCard;