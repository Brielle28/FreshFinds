import { IoMdHeartEmpty } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from "react";

const CartItemLike = ({ item, likeArray, setLikeArray }) => {
  const [isLike, setIsLike] = useState(false);

  // Effect to initialize the like state from localStorage or likeArray on component mount
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedItems')) || [];
    const alreadyLiked = storedLikes.some(likedItem => likedItem.id === item.id);
    setIsLike(alreadyLiked); // Sync isLike state with what's in localStorage
  }, [item.id]);

  // Save liked items to localStorage whenever likeArray changes
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likeArray));
  }, [likeArray]);

  // Function to handle the like button click
  const handleIsLike = () => {
    setIsLike(prevIsLike => {
      if (!prevIsLike) {
        // Add the item to likeArray if it's liked
        if (!item.id) {
          item.id = Date.now() + Math.random(); // Assign a unique id if not present
        }
        setLikeArray(prevLikeArray => {
          // Avoid duplicates
          const alreadyLiked = prevLikeArray.some(likedItem => likedItem.id === item.id);
          if (!alreadyLiked) {
            const updatedLikes = [...prevLikeArray, item];
            return updatedLikes;
          }
          return prevLikeArray;
        });
      } else {
        // Remove the item from likeArray if it's unliked
        setLikeArray(prevLikeArray => {
          const updatedLikes = prevLikeArray.filter(likedItem => likedItem.id !== item.id);
          return updatedLikes;
        });
      }
      return !prevIsLike; // Toggle the isLike state
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
