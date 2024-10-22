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
    <div className="sticky top-0 z-10 flex flex-col items-center justify-center w-full px-4 py-2 bg-white sm:px-6 md:px-20 lg:px-24">
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center justify-center gap-2">
      <IoIosArrowBack
        className="text-lg sm:text-xl md:text-3xl lg:text-[35px] mt-1 hover:text-green-500"
        onClick={() => navigate(-1)}
      />
      <h1 className="text-black font-bold text-lg sm:text-xl md:text-3xl lg:text-[35px]">
        Cart
      </h1>
      <FaShoppingCart className="text-lg sm:text-xl md:text-3xl lg:text-[35px] text-green-500 mt-1" />
    </div>
    <div className="w-[35%] sm:w-[25%] md:w-[20%] lg:w-[15%]">
      {cartItems.length > 0 && (
        <Link
          to="/CheckOut"
          className="flex items-center justify-center w-full"
        >
          <button className="w-full py-2 mt-6 mb-6 text-white bg-green-500 rounded-lg sm:py-3 sm:mt-8 md:mt-10 sm:mb-8 md:mb-10">
            <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">
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
