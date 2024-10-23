import { MdFormatListBulletedAdd } from "react-icons/md";
const CheckOutHeader = () => {
  return (
    <div className="sticky top-0 z-20 flex flex-col items-center justify-center w-full pt-5 bg-white md:pt-10 md:pb-5 md:px-20 lg:px-24">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-black font-bold text-lg sm:text-xl md:text-3xl lg:text-[35px]">
            Checkout
          </h1>
          <MdFormatListBulletedAdd className="text-lg sm:text-xl md:text-3xl lg:text-[35px] text-green-500 mt-1" />
        </div>
      </div>
    </div>
  );
};
export default CheckOutHeader;
