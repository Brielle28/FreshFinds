// import { useContext } from "react";
// import { IoHome } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoPersonOutline } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import { UserContext } from "../Context/UserProvider";

// const Footer = () => {
//   const { cartItems } = useContext(UserContext);

//   const navLinkStyles = ({ isActive }) => ({
//     backgroundColor: isActive ? "#22c55e" : "transparent",
//     borderRadius: isActive ? "0px" : "0px",
//     color: isActive ? "white" : "black",
//   });

//   const textColor = ({ isActive }) => ({
//     color: isActive ? "white" : "black", // Change text color based on active state
//   });

//   return (
//     <div className="sticky bottom-0 flex flex-row items-center justify-between px-4 sm:px-[50px] md:px-[175px] w-full bg-white z-50">
//       <NavLink
//         to="/HomePage"
//         style={navLinkStyles}
//         className="flex flex-col items-center justify-center h-full px-2 py-4"
//       >
//         <IoHome className="text-[24px] md:text-[30px]" />
//         <h3 style={textColor} className="text-[14px] md:text-[18px] font-light">Home</h3>
//       </NavLink>

//       <NavLink
//         to="/LikeItems"
//         style={navLinkStyles}
//         className="flex flex-col items-center justify-center h-full px-1 py-4"
//       >
//         <FaRegHeart className="text-[24px] md:text-[30px]" />
//         <h3 style={textColor} className="text-[14px] md:text-[18px] font-light">Favourite</h3>
//       </NavLink>

//       <NavLink
//         to="/ItemsInCart"
//         style={navLinkStyles}
//         className="relative flex flex-col items-center justify-center h-full px-4 py-4"
//       >
//         <FiShoppingCart className="text-[24px] md:text-[30px]" />
//         <h3 style={textColor} className="text-[14px] md:text-[18px] font-light">Cart</h3>
//         {cartItems.length > 0 && (
//           <span className="absolute flex items-center justify-center w-4 h-4 p-[10px] text-xs text-white bg-green-500 rounded-full -top-2 -right-2">
//             <h1 className="font-extrabold">{cartItems.length}</h1>
//           </span>
//         )}
//       </NavLink>

      // <div className="flex flex-col items-center justify-center">
      //   <IoPersonOutline className="text-[24px] md:text-[30px]" />
      //   <h3 className="text-[14px] md:text-[18px] font-light">Profile</h3>
      // </div>
//     </div>
//   );
// };

// export default Footer;
import { useContext } from "react";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

const Footer = () => {
  const { cartItems } = useContext(UserContext);

  return (
    <div className="sticky bottom-0 flex flex-row items-center justify-between px-4 sm:px-[50px] md:px-[175px] w-full bg-white z-50">
      <NavLink
        to="/HomePage"
        className={({ isActive }) => `
          flex flex-col items-center justify-center h-full px-2 py-4
          ${isActive ? 'bg-green-500 text-white' : 'text-black'}
        `}
      >
        <IoHome className="text-[24px] md:text-[30px]" />
        <h3 className="text-[14px] md:text-[18px] font-light">Home</h3>
      </NavLink>

      <NavLink
        to="/LikeItems"
        className={({ isActive }) => `
          flex flex-col items-center justify-center h-full px-1 py-4
          ${isActive ? 'bg-green-500 text-white' : 'text-black'}
        `}
      >
        <FaRegHeart className="text-[24px] md:text-[30px]" />
        <h3 className="text-[14px] md:text-[18px] font-light">Favourite</h3>
      </NavLink>

      <NavLink
        to="/ItemsInCart"
        className={({ isActive }) => `
          relative flex flex-col items-center justify-center h-full px-4 py-4
          ${isActive ? 'bg-green-500 text-white' : 'text-black'}
        `}
      >
        <FiShoppingCart className="text-[24px] md:text-[30px]" />
        <h3 className="text-[14px] md:text-[18px] font-light">Cart</h3>
        {cartItems.length > 0 && (
          <span className="absolute flex items-center justify-center w-4 h-4 p-[10px] text-xs text-white bg-green-500 rounded-full -top-2 -right-2">
            <h1 className="font-extrabold">{cartItems.length}</h1>
          </span>
        )}
      </NavLink>

      <div className="flex flex-col items-center justify-center">
        <IoPersonOutline className="text-[24px] md:text-[30px]" />
        <h3 className="text-[14px] md:text-[18px] font-light">Profile</h3>
      </div>
    </div>
  );
};

export default Footer;