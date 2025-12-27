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
      className="absolute top-2 left-2 z-10 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
      title={itemInCart ? 'Update Cart' : 'Add to Cart'}
    >
      <div className="relative">
        <BiCartAdd className="text-green-500 text-base sm:text-lg md:text-xl lg:text-2xl" />
        {itemInCart && (
          <span className="absolute flex items-center justify-center min-w-[1rem] h-4 px-1 text-[10px] sm:text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
            {itemInCart.quantity}
          </span>
        )}
      </div>
    </button>   
  );
};

export default AddToCart;