import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const { handlePreviousStep, paymentFormData, formData } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start w-full px-3 sm:px-4 md:px-5 lg:px-6 bg-white rounded-lg">
      <h2 className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
        Order Confirmation
      </h2>
      <div className="flex flex-col items-start justify-start w-full gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              First Name
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">{formData.firstName}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              Last Name
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {formData.lastName}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">Email</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {formData.email}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">Address</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {formData.streetAddress}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">State</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">{formData.state}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">City</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">{formData.city}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">Zip Code</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">{formData.zipCode}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              Phone Number
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">{formData.phoneNumber}</p>
          </div>
        </div>

        <hr className="w-full h-px sm:h-0.5 md:h-1 my-3 sm:my-4 bg-gray-300" />

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              Card Number
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {paymentFormData.cardNumber}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              Expiration Date
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {paymentFormData.expirationDate}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
              Name on Card
            </p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words">
              {paymentFormData.cardName}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-full sm:w-[48%]">
            <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">CVC</p>
            <p className="text-black text-xs sm:text-sm md:text-[14px] break-words"> {paymentFormData.cvv} </p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-between w-full gap-3 sm:gap-4 mt-4 sm:mt-5">
          <button
            onClick={handlePreviousStep}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-300 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-gray-400 transition-colors text-xs sm:text-sm md:text-base font-semibold text-black w-[45%] sm:w-[30%]"
          >
            <HiOutlineArrowNarrowLeft className="text-sm sm:text-base" /> 
            <span>Previous</span>
          </button>
          <Link to='/OrderSuccess' className="w-[45%] sm:w-[30%]">
            <button className="flex items-center justify-center w-full px-3 sm:px-4 md:px-7 py-2 sm:py-2.5 font-bold text-xs sm:text-sm md:text-base text-white bg-green-500 rounded-lg sm:rounded-[7px] hover:bg-green-600 transition-colors">
              Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
