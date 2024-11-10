import { IoMdHeartEmpty } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from "react";

const CartItemLike = ({ item, likeArray, setLikeArray }) => {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedItems')) || [];
    const alreadyLiked = storedLikes.some(likedItem => likedItem.id === item.id);
    setIsLike(alreadyLiked);
  }, [item.id]);

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likeArray));
  }, [likeArray]);

  const handleIsLike = (e) => {
    e.preventDefault(); // Prevent any navigation
    e.stopPropagation(); // Stop event from bubbling up
    
    setIsLike(prevIsLike => {
      if (!prevIsLike) {
        if (!item.id) {
          console.error("Item does not have a valid id");
          return prevIsLike;
        }
        setLikeArray(prevLikeArray => {
          const alreadyLiked = prevLikeArray.some(likedItem => likedItem.id === item.id);
          if (!alreadyLiked) {
            return [...prevLikeArray, item];
          }
          return prevLikeArray;
        });
      } else {
        setLikeArray(prevLikeArray => 
          prevLikeArray.filter(likedItem => likedItem.id !== item.id)
        );
      }
      return !prevIsLike;
    });
  };

  return (
    <button
      className="absolute rounded-[30px] bg-green-100 top-2 right-3 p-2 z-10"
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