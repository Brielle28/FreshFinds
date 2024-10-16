import { FaHeart } from "react-icons/fa";

const LikeItemsHeader = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4 md:pt-10 md:px-20 px-4 sticky top-0 z-10 bg-white pb-5">
        <div className="flex items-center justify-start w-full gap-5">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-[35px]">
              Liked Items
            </h1>
            <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] text-green-500 mt-1 md:mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeItemsHeader;
