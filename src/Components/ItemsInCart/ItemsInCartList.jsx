import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const ItemsInCartList = () => {
  const { cartItems, updateQuantity } = useContext(UserContext);

  console.log(cartItems, "from items in cart");

  return (
    <div className=" flex flex-col items-center justify-center mx-auto pt-[2px] px-4 sm:px-8 lg:px-16">
      {cartItems.length > 0 ? (
        <div className="grid items-center justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-[100%] p-1 bg-white rounded-lg shadow-2xl sm:p-5 gap-5"
            >
              <div className="flex flex-row items-start justify-start gap-5">
                <div className="bg-[#D7F3D0] p-2 rounded-[5px] relative">
                  <div
                    className="w-16 h-16 bg-center bg-no-repeat bg-contain sm:w-20 sm:h-20"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                </div>
                <div className="flex flex-col items-start justify-start mt-1">
                  <h1 className="font-bold text-[14px] sm:text-[10px] lg:text-[18px] sm:w-[100px]">
                    {item.title}
                  </h1>
                  <h1 className="text-slate-400 text-[12px] sm:text-[9px] lg:text-[15px] sm:w-[80px]">
                    {item.category}
                  </h1>
                  <h5 className="font-medium text-green-500 text-[14px] sm:text-[15px] lg:text-[15px]">
                    {item.price}
                    <span className="text-black font-medium text-[10px] sm:text-[11px] lg:text-[11px]">
                      /Kg
                    </span>
                  </h5>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <button
                  className="p-1 bg-slate-300 rounded-[30px] text-sm sm:text-base"
                  onClick={() => updateQuantity(item.id, -1)} // Disable button if quantity is 1
                >
                  <FiMinus className="text-slate-600" />
                </button>
                <h1 className="text-sm sm:text-base">{item.quantity}</h1>
                <button
                  className="p-1 bg-green-500 rounded-[30px] text-sm sm:text-base"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <FaPlus className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-md h-[300px] flex items-center justify-center bg-[#d7f3d0] my-10 mx-auto">
          <p className="font-bold text-[18px] sm:text-[20px]">
            {" "}
            No items in cart{" "}
          </p>
        </div>
      )}
     
    </div>
  );
};

export default ItemsInCartList;
