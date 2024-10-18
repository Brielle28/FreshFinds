import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import CartItemsRemoveLike from "../CartItems/CartItemsRemoveLike";

const LikedItems = () => {
  const { likeArray } = useContext(UserContext);

  // console.log(likeArray)
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:py-10 md:px-20">
      {likeArray.length > 0 ? (
        <div className="grid items-center justify-center grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {likeArray.map(
            (
              item // Mapping over likeArray to pass each item
            ) => (
              <div key={item.id} className="p-4">
                <div className="bg-[#D7F3D0] p-5 rounded-[5px] relative">
                  <CartItemsRemoveLike item={item} /> {/* Pass item here */}
                  <div
                    className="w-40 h-40 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                </div>
                <h1 className="font-bold text-[20px]">{item.title}</h1>
                <h5 className="font-medium text-green-500 text-[15px]">
                  {item.price}
                  <span className="text-black font-medium text-[11px]">
                    /Kg
                  </span>
                </h5>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="w-[80%] h-[300px] flex items-center justify-center bg-[#d7f3d0] my-10">
          <p className="font-bold text-[20px]">No liked items</p>
        </div>
      )}
    </div>
  );
};

export default LikedItems;
