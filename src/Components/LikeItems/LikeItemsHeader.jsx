import { FaHeart } from "react-icons/fa";
// import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const LikeItemsHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky top-0 z-10 flex flex-col items-center justify-center w-full px-4 pt-4 pb-5 bg-white md:pt-10 md:px-20 lg:px-24">
        <div className="flex items-center justify-between w-full gap-5">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-[35px]">
              Liked Items
            </h1>
            <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] text-green-500 mt-1 md:mt-2" />
          </div>
          <div className="">
            {/* <FaLongArrowAltLeft className="text-[35px]" /> */}
            <HiOutlineArrowUturnLeft
              className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] mt-1 md:mt-2 hover:text-green-500"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeItemsHeader;
