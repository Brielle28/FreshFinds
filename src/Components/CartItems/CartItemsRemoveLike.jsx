import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const CartItemsRemoveLike = ({ item }) => {
  const { setLikeArray } = useContext(UserContext);

  const handleRemoveItem = () => {
    setLikeArray((prevLikeArray) => {
      // Filter out the item to remove it from the array
      const updatedLikes = prevLikeArray.filter(
        (likedItem) => likedItem.id !== item.id
      );
      localStorage.setItem("likedItems", JSON.stringify(updatedLikes)); // Sync with localStorage
      return updatedLikes;
    });
  };

  return (
    <button
      className="p-2 rounded-[30px] bg-white absolute right-3 top-3 "
      onClick={handleRemoveItem} // Call the removal function on click
    >
      <IoClose className="text-green-500 hover:text-red-600" />
    </button>
  );
};

export default CartItemsRemoveLike;
