import { useContext } from "react";
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

const Footer = () => {
  const { cartItems } = useContext(UserContext);
  return (
    <>
      <div className="sticky bottom-0 flex flex-row items-center justify-between px-4 sm:px-[50px] md:px-[175px] py-4 w-full bg-white">
        <Link to="/HomePage">
          <div className="flex flex-col items-center justify-center">
            <IoHome className="text-[24px] md:text-[30px]" />
            <h3 className="text-[14px] md:text-[18px] text-black font-light">
              Home
            </h3>
          </div>
        </Link>
        <Link to="/LikeItems">
          <div className="flex flex-col items-center justify-center">
            <FaRegHeart className="text-[24px] md:text-[30px]" />
            <h3 className="text-[14px] md:text-[18px] text-black font-light">
              Favourite
            </h3>
          </div>
        </Link>
        <Link to="/ItemsInCart">
          <div className="relative flex flex-col items-center justify-center">
            <FiShoppingCart className="text-[24px] md:text-[30px]" />
            <h3 className="text-[14px] md:text-[18px] text-black font-light">
              Cart
            </h3>
            {cartItems.length > 0 && ( // Corrected this line
              <span className="absolute flex items-center justify-center w-4 h-4 p-[10px] text-xs text-white bg-green-500 rounded-full -top-2 -right-2">
                <h1 className="font-extraboldbold">{cartItems.length}</h1>
              </span>
            )}
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <IoPersonOutline className="text-[24px] md:text-[30px]" />
          <h3 className="text-[14px] md:text-[18px] text-black font-light">
            Profile
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
