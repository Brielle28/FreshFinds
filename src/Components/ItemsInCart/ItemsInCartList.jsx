import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const ItemsInCartList = () => {
  const { cartItems, updateQuantity } = useContext(UserContext);

  console.log(cartItems, "from items in cart");

  return (
    <div className="flex flex-col items-center justify-center mx-auto pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 bg-white pb-20 sm:pb-24 md:pb-28">
      {cartItems.length > 0 ? (
        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full max-w-7xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full p-3 sm:p-4 md:p-5 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl md:shadow-2xl gap-3 sm:gap-4 md:gap-5 hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-row items-start justify-start gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0">
                <div className="bg-[#D7F3D0] p-1.5 sm:p-2 rounded-[5px] flex-shrink-0">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                </div>
                <div className="flex flex-col items-start justify-start mt-1 flex-1 min-w-0">
                  <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-[18px] line-clamp-2">
                    {item.title}
                  </h1>
                  <h1 className="text-slate-400 text-[10px] sm:text-xs md:text-sm lg:text-[15px] line-clamp-1">
                    {item.category}
                  </h1>
                  <h5 className="font-medium text-green-500 text-xs sm:text-sm md:text-base lg:text-[15px]">
                    {item.price}
                    <span className="text-black font-medium text-[9px] sm:text-[10px] md:text-[11px]">
                      /Kg
                    </span>
                  </h5>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                <button
                  className="p-1.5 sm:p-2 bg-slate-300 rounded-full hover:bg-slate-400 transition-colors"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <FiMinus className="text-slate-600 text-xs sm:text-sm" />
                </button>
                <h1 className="text-xs sm:text-sm md:text-base font-semibold min-w-[1.5rem] text-center">{item.quantity}</h1>
                <button
                  className="p-1.5 sm:p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <FaPlus className="text-white text-xs sm:text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-md h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center bg-[#d7f3d0] my-8 sm:my-10 rounded-lg sm:rounded-xl">
          <p className="font-bold text-base sm:text-lg md:text-xl px-4 text-center">
            No items in cart
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemsInCartList;
