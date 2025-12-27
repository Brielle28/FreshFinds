import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { Link } from "react-router-dom";

const ItemsInCartHeader = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(UserContext);
  return (
    // <div className="flex flex-row items-center justify-between w-full px-14 py-10 bg-[#d7f3d0] fixed top-0 z-10 h-[90px]">
    //   <div className="p-3 rounded-[30px] bg-white">
    //     <IoIosArrowBack  onClick={() => navigate(-1)}/>
    //   </div>
    //   <div>
    //     <h1 className="font-bold text-[25px]">Cart</h1>
    //   </div>
    //   <div className="p-3 rounded-[30px] bg-white">
    //     <IoNotificationsOutline />
    //   </div>
    // </div>
    <div className="sticky top-0 z-10 flex flex-col items-center justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 bg-white shadow-sm">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <button onClick={() => navigate(-1)} className="hover:text-green-500 transition-colors">
            <IoIosArrowBack className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer" />
          </button>
          <h1 className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Cart
          </h1>
          <FaShoppingCart className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-500" />
        </div>
        <div className="w-auto sm:w-[140px] md:w-[160px] lg:w-[180px]">
          {cartItems.length > 0 && (
            <Link
              to="/CheckOut"
              className="flex items-center justify-center w-full"
            >
              <button className="w-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                  Checkout
                </h1>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>

  );
};

export default ItemsInCartHeader;
