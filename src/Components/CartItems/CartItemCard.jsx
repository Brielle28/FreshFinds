// // import AddToCart from "./AddToCart";
// // import CartItemLike from "./CartItemLike";
// // import { Link } from "react-router-dom";

// // const CartItemCard = ({
// //   imageUrl,
// //   title,
// //   price,
// //   item,
// //   likeArray,
// //   setLikeArray,
// //   cartItems,
// //   addToCart
// // }) => {
// //   // Find if this specific item is in cart
// //   const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

// //   return (
// //     <div className="w-full my-5 bg-white">
// //       <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
// //         <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full">
// //           <CartItemLike
// //             item={item}
// //             likeArray={likeArray}
// //             setLikeArray={setLikeArray}
// //           />
// //           {/* Only wrap the image with Link */}
// //             <div
// //               className="w-40 h-40 bg-center bg-no-repeat bg-contain"
// //               style={{ backgroundImage: `url(${imageUrl})` }}
// //             ></div>
// //         </div>
// //           <div className="flex flex-col items-start justify-start w-full gap-2">
// //             {/* Only wrap the title with Link */}
// //             <h4 className="font-extrabold text-[20px]">{title}</h4>
// //             <h3 className="text-green-500 font-bold text-[13px]">
// //               {price} <span className="text-black font-light text-[10px]">/KG</span>
// //             </h3>
// //       </div>
// //       {/* Add to Cart button is outside the Link, so it won’t trigger navigation */}
// //       <AddToCart
// //         item={item}
// //         itemInCart={itemInCart}
// //         addToCart={addToCart}
// //       />
// //     </div>
// //     </div >
// //   );
// // };

// // export default CartItemCard;
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
//   addToCart
// }) => {
//   const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

//   const handleCardClick = (e) => {
//     // Prevent navigation if clicking on the like button or add to cart button
//     if (
//       e.target.closest('.like-button') ||
//       e.target.closest('.add-to-cart-button')
//     ) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="w-full my-5 bg-white">
//       <Link
//         to={`/item/${item.id}`}
//         onClick={handleCardClick}
//         className="block"
//       >
//         <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
//           <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full">
//             <div className="absolute z-10 like-button top-2 right-2">
//               <CartItemLike
//                 onClick={(e) => {
//                   e.stopPropagation(); // This stops the Link from navigating
//                   // Handle add to cart functionality
//                 }}
//                 item={item}
//                 likeArray={likeArray}
//                 setLikeArray={setLikeArray}
//               />
//             </div>
//             <div
//               className="w-40 h-40 bg-center bg-no-repeat bg-contain"
//               style={{ backgroundImage: `url(${imageUrl})` }}
//             />
//           </div>
//           <div className="flex flex-col items-start justify-start w-full gap-2">
//             <h4 className="font-extrabold text-[20px]">{title}</h4>
//             <h3 className="text-green-500 font-bold text-[13px]">
//               {price} <span className="text-black font-light text-[10px]">/KG</span>
//             </h3>
//           </div>
//           <div className="add-to-cart-button">
//             <AddToCart
//               onClick={(e) => {
//                 e.stopPropagation(); // This stops the Link from navigating
//                 // Handle add to cart functionality
//               }}
//               item={item}
//               itemInCart={itemInCart}
//               addToCart={addToCart}
//             />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default CartItemCard;

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
  addToCart
}) => {
  const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

  return (
    <div className="w-full my-5 bg-white">
      <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
        <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full">
          {/* Like button outside of Link */}
          <CartItemLike
            item={item}
            likeArray={likeArray}
            setLikeArray={setLikeArray}
          />
          {/* Link only wraps the image and text content */}
          <Link to={`/item/${item.id}`} className="w-full">
            <div
              className="w-40 h-40 mx-auto bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </Link>
        </div>
        <Link to={`/item/${item.id}`} className="w-full">
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <h4 className="font-extrabold text-[20px]">{title}</h4>
            <h3 className="text-green-500 font-bold text-[13px]">
              {price} <span className="text-black font-light text-[10px]">/KG</span>
            </h3>
          </div>
        </Link>
        {/* Add to Cart button outside of Link */}
        <AddToCart
          item={item}
          itemInCart={itemInCart}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default CartItemCard;