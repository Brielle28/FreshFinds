import { FaHeart } from "react-icons/fa";

const LikeItemsHeader = () => {

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center md:pt-10 md:px-20 pl-4 sticky top-0 z-10 bg-white pb-5">
        <div className="flex items-center justify-start w-full gap-5">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-black font-bold text-sm md:text-base lg:text-[35px]">
              {" "}
              Liked Items
            </h1>
            <FaHeart className="text-[30px] text-green-500 mt-[7px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeItemsHeader;
