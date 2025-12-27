import { FaHeart } from "react-icons/fa";
// import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const LikeItemsHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky top-0 z-10 flex flex-col items-center justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-3 sm:pb-4 md:pb-5 bg-white shadow-sm">
        <div className="flex items-center justify-between w-full max-w-7xl gap-3 sm:gap-4 md:gap-5">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h1 className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Liked Items
            </h1>
            <FaHeart className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500" />
          </div>
          <button onClick={() => navigate(-1)} className="hover:text-green-500 transition-colors">
            <HiOutlineArrowUturnLeft
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default LikeItemsHeader;
