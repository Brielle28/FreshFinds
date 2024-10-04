import { FaLocationDot } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <>
    <div className="w-full flex flex-col items-center justify-center bg-[#d7f3d0] py-10 px-20">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-center p-2 bg-white rounded-full">
              <IoIosArrowBack className="text-black" size={17} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaLocationDot size={16} />
                <h1 className="text-black font-semibold">Location</h1>
              </div>
              <h1 className="text-black font-bold">Nigeria, Enugu</h1>

            </div>
            <div className="flex items-center justify-center p-2 bg-white rounded-full">
              <IoNotificationsOutline className="text-black" size={17} />
            </div>


          </div>
          <div className="relative w-[90%] mt-10">
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 rounded-[35px] outline-0"
              placeholder="Search Your Groceries"
            />
            <FaSearch className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#88df72] font-extrabold" />
          </div>
        </div>
    </>
  )
}

export default Header