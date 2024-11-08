import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const OrderConfirmation = () => {
  const { handlePreviousStep, paymentFormData, formData } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start w-full px-5 bg-white rounded-lg md:w-[100%] lg:w-[100%]">
      <h2 className="mt-4 text-lg font-bold text-black sm:text-[11px] md:text-xl lg:text-2xl">
        Order Confirmation
      </h2>
      <div className="flex flex-col items-start justify-start w-full gap-4 mt-3 ml-5 md:ml-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              First Name
            </p>
            <p className="text-black text-[11px] md:text-[14px]">{formData.firstName}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              Last Name
            </p>
            <p className="text-black text-[11px] md:text-[14px]">
              {formData.lastName}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">Email</p>
            <p className="text-black text-[11px] md:text-[14px]">
              {formData.email}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">Address</p>
            <p className="text-black text-[11px] md:text-[14px]">
              {formData.streetAddress}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">State</p>
            <p className="text-black text-[11px] md:text-[14px]">{formData.state}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">City</p>
            <p className="text-black text-[11px] md:text-[14px]">{formData.city}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">Zip Code</p>
            <p className="text-black text-[11px] md:text-[14px]">{formData.zipCode}</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              Phone Number
            </p>
            <p className="text-black text-[11px] md:text-[14px]">{formData.phoneNumber}</p>
          </div>
        </div>

        <hr className="w-full h-1 my-2 text-black" />

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              Card Number
            </p>
            <p className="text-black text-[11px] md:text-[14px]">
              {paymentFormData.cardNumber}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              Expiration Date
            </p>
            <p className="text-black text-[11px] md:text-[14px]">
              {paymentFormData.expirationDate}

            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">
              Name on Card
            </p>
            <p className="text-black text-[11px] md:text-[14px]">
              {paymentFormData.cardName}

            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 w-[48%]">
            <p className="text-gray-400 text-[11px] md:text-[14px]">CVC</p>
            <p className="text-black text-[11px] md:text-[14px]"> {paymentFormData.cvv} </p>
          </div>
        </div>

        {/* buttons for big screen */}
        <div className="items-center justify-between hidden w-full mt-4 md:flex">
          <div className="w-[48%] flex items-start justify-start">
            <button
              onClick={handlePreviousStep}
              className="flex items-center justify-center bg-gray-300 p-2 rounded-[5px] text-white w-[30%]"
            >
              <HiOutlineArrowNarrowLeft /> Previous
            </button>
          </div>
          <div className="w-[48%] flex items-start justify-start">
            <button className="flex items-center justify-center py-2 px-7 font-bold text-white bg-green-500 rounded-[7px] w-[30%]">
              Order
            </button>
          </div>
        </div>

        {/* buttons for small screens */}
        <div className="flex items-center justify-between w-full mt-4 md:hidden">
          <button
            onClick={handlePreviousStep}
            className="flex items-center justify-center bg-gray-300 p-2 rounded-[5px] text-white w-[45%]"
          >
            <HiOutlineArrowNarrowLeft /> Previous
          </button>
          <button className="py-2 px-7 font-bold text-white bg-green-500 rounded-[7px] w-[45%]">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
