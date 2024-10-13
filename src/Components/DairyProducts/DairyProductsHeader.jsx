import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const DairyProductsHeader = () => {
  const navigate = useNavigate();

  return (
    <>
     <div className="w-full flex flex-col items-center justify-center bg-[#d7f3d0] py-6 px-4 md:py-10 md:px-20">
        <div className="flex items-center justify-between w-full">
          {/* Back arrow */}
          <div className="flex items-center justify-center p-2 bg-white rounded-full">
            <IoIosArrowBack className="text-black" size={17} onClick={() => navigate(-1)} />
          </div>
          
          {/* category */}
          <h1 className="text-sm font-semibold text-black md:text-base">Dairy Products</h1>

          {/* Notifications icon */}
          <div className="flex items-center justify-center p-2 bg-white rounded-full">
            <IoNotificationsOutline className="text-black" size={17} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DairyProductsHeader