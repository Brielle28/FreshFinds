import { IoMdHeartEmpty } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from "react";

const CartItemLike = ({ item, likeArray, setLikeArray }) => {
  const [isLike, setIsLike] = useState(false);

  // Effect to check if the item is already liked (when loading the component)
  useEffect(() => {
    const alreadyLiked = likeArray.some(likedItem => likedItem.id === item.id);
    setIsLike(alreadyLiked);
  }, [likeArray, item.id]);

  // Function to handle the like button click
  const handleIsLike = () => {
    setIsLike(prevIsLike => {
      if (!prevIsLike) {
        // Add item if it is liked
        if (!item.id) {
          item.id = Date.now() + Math.random(); // Ensure unique id
        }
        setLikeArray(prevLikeArray => {
          // Avoid adding duplicates
          const alreadyLiked = prevLikeArray.some(likedItem => likedItem.id === item.id);
          if (!alreadyLiked) {
            return [...prevLikeArray, item];
          }
          return prevLikeArray;
        });
      } else {
        // Remove item if it is unliked
        setLikeArray(prevLikeArray => prevLikeArray.filter(likedItem => likedItem.id !== item.id));
      }

      return !prevIsLike; // Toggle like state
    });
  };

  return (
    <button
      className="absolute rounded-[30px] bg-green-100 top-2 right-3 p-2"
      onClick={handleIsLike}
    >
      {isLike ? (
        <FaHeart className="text-[30px] text-green-500" />
      ) : (
        <IoMdHeartEmpty className="text-[30px] text-green-500" />
      )}
    </button>
  );
};

export default CartItemLike;
