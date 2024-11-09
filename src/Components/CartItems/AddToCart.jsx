// import { useContext } from "react";
// import { UserContext } from "../Context/UserProvider";
// import { BiCartAdd } from "react-icons/bi";

// const AddToCart = ({ item, itemInCart, addToCart }) => {
//   const handleClick = (e) => {
//     e.stopPropagation();
//     addToCart(item);
//   };
//   const { cartItems } = useContext(UserContext);
//   console.log(cartItems);
//   return (
//     <button
//       onClick={handleClick}
//       className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 text-white transition-colors bg-green-500 rounded-br-lg hover:bg-green-600"
//     >
//       <div className="relative">
//         <BiCartAdd className="text-[20px] font-extrabold" />
//         {itemInCart && (
//           <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
//             {itemInCart.quantity}
//           </span>
//         )}
//       </div>
//     </button>
//   );
// };

// export default AddToCart;
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { BiCartAdd } from "react-icons/bi";

const AddToCart = ({ item, itemInCart, addToCart }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent any navigation
    e.stopPropagation(); // Stop event from bubbling up
    addToCart(item);
  };

  const { cartItems } = useContext(UserContext);

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-0 right-0 z-10 flex items-center justify-center w-10 h-10 text-white transition-colors bg-green-500 rounded-br-lg hover:bg-green-600"
    >
      <div className="relative">
        <BiCartAdd className="text-[20px] font-extrabold" />
        {itemInCart && (
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
            {itemInCart.quantity}
          </span>
        )}
      </div>
    </button>
  );
};

export default AddToCart;