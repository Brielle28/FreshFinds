import { IoIosArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ItemsInCartHeader = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-row items-center justify-between w-full px-14 py-10 bg-[#d7f3d0] fixed top-0 z-10 h-[90px]">
      <div className="p-3 rounded-[30px] bg-white">
        <IoIosArrowBack  onClick={() => navigate(-1)}/>
      </div>
      <div>
        <h1 className="font-bold text-[25px]">Cart</h1>
      </div>
      <div className="p-3 rounded-[30px] bg-white">
        <IoNotificationsOutline />
      </div>
    </div>
  );
};

export default ItemsInCartHeader;
