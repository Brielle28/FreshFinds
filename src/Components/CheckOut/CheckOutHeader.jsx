import { MdFormatListBulletedAdd } from "react-icons/md";
const CheckOutHeader = () => {
  return (
    <div className="sticky top-0 z-20 flex flex-col items-center justify-center w-full pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-3 sm:pb-4 md:pb-5 bg-white shadow-sm">
      <div className="flex items-center justify-center w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <h1 className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Checkout
          </h1>
          <MdFormatListBulletedAdd className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500" />
        </div>
      </div>
    </div>
  );
};
export default CheckOutHeader;
