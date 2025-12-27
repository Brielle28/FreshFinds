import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { BakeryItems } from "../../Utils/BakeryItem";
import { BeveragesItems } from "../../Utils/BeveragesItem";
import { DairyProductsItems } from "../../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../../Utils/MeatAndSeafoodItems";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const LikedItems = () => {
  const { likeArray, setLikeArray } = useContext(UserContext);

  const handleRemoveItem = (itemId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikeArray((prevLikeArray) => {
      const updatedLikes = prevLikeArray.filter(
        (likedItem) => likedItem.id !== itemId
      );
      localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  const allItems = [
    ...DairyProductsItems.map(item => ({ ...item, section: 'dairyproducts' })),
    ...MeatAndSeafoodItems.map(item => ({ ...item, section: 'meatandseafood' })),
    ...FruitsAndVegetablesItem.map(item => ({ ...item, section: 'fruitsandvegetables' })),
    ...BeveragesItems.map(item => ({ ...item, section: 'beverages' })),
    ...FrozenFoodItems.map(item => ({ ...item, section: 'frozenfoods' })),
    ...BakeryItems.map(item => ({ ...item, section: 'bakery' })),
  ];

  // Find items in likeArray with additional details from allItems
  const likedItemsWithDetails = likeArray.map(likeItem =>
    allItems.find(item => item.id === likeItem.id) || likeItem
  );

  return (
    <div className="flex flex-col items-start justify-start w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-white py-6 sm:py-8 md:py-10 pb-20 sm:pb-24 md:pb-28 min-h-screen">
      {likedItemsWithDetails.length > 0 ? (
        <div className="grid items-start justify-start grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-7xl">
          {likedItemsWithDetails.map((item) => (
            <div key={item.id} className="w-full flex flex-col">
              <Link to={`/${item.section}/${item.id}`} className="flex-1">
                <div className="p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform">
                  <div className="bg-[#D7F3D0] p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <div
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-center bg-no-repeat bg-contain"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                  </div>
                  <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-[20px] mt-2 sm:mt-3 line-clamp-2">{item.title}</h1>
                  <h5 className="font-medium text-green-500 text-xs sm:text-sm md:text-base lg:text-[15px]">
                    {item.price}
                    <span className="text-black font-medium text-[9px] sm:text-[10px] md:text-[11px]">/Kg</span>
                  </h5>
                </div>
              </Link>
              <button
                onClick={(e) => handleRemoveItem(item.id, e)}
                className="mt-1.5 flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                title="Remove from favorites"
              >
                <FaTrash className="text-[10px] sm:text-xs" />
                <span className="text-[10px] sm:text-xs">Remove</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-md bg-white"> 
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center bg-[#d7f3d0] my-8 sm:my-10 rounded-lg sm:rounded-xl">
            <p className="font-bold text-base sm:text-lg md:text-xl px-4 text-center">No liked items</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LikedItems;
