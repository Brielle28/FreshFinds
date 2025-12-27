import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
const Payment = () => {
  const { handleNext, handlePreviousStep, paymentFormData, setPaymentFormData} = useContext(UserContext);
 

  const [errors, setErrors] = useState({
    cardNumber: false,
    expirationDate: false,
    cvv: false,
    cardName: false,
  });

  const handleValidation = () => {
    const newErrors = {
      cardNumber: paymentFormData.cardNumber.trim().length !== 16, // Card number should be 16 digits
      expirationDate: !/^\d{2}\/\d{2}$/.test(paymentFormData.expirationDate), // MM/YY format
      cvv: paymentFormData.cvv.trim().length !== 3, // CVV should be 3 digits
      cardName: paymentFormData.cardName.trim() === "",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log(paymentFormData, "Form submitted");
      handleNext();
    } else {
      console.log("Validation failed");
    }
  };
console.log(paymentFormData, "this is payment form data")
  return (
    <div className="flex flex-col items-start px-3 sm:px-5 md:px-8 lg:px-10 pt-4 sm:pt-5 justify-center bg-white rounded-lg sm:rounded-[7px]">
      <h2 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-[25px]">
        Payment Method
      </h2>

      <form onSubmit={handleSubmit} className="w-full sm:w-[95%] md:w-[93%] mt-4 sm:mt-5">
        {/* Card Number */}
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <h1 className="font-semibold">Card Number</h1>
          <label
            className={`flex items-center w-full gap-2 border-2 ${
              errors.cardNumber
                ? "bg-red-100 border-red-400"
                : "bg-white border-black"
            } input input-bordered`}
          >
            <BsCreditCard2Back />
            <input
              type="text"
              name="cardNumber"
              className="w-full bg-transparent grow"
              placeholder="1234-1234-1234-1234"
              value={paymentFormData.cardNumber}
              onChange={handleChange}
            />
          </label>
          {errors.cardNumber && (
            <p className="text-sm text-red-600">
              Card Number must be 16 digits
            </p>
          )}
        </div>

        <div className="flex flex-col w-full mt-4 md:flex-row md:justify-between">
          {/* Expiration Date */}
          <div className="flex flex-col items-start justify-center w-[100%] md:w-[48%] gap-1 mt-4">
            <h1 className="font-semibold">Expiration Date</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.expirationDate
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <CiCalendarDate />
              <input
                type="text"
                name="expirationDate"
                className="w-full bg-transparent grow"
                placeholder="MM/YY"
                value={paymentFormData.expirationDate}
                onChange={handleChange}
              />
            </label>
            {errors.expirationDate && (
              <p className="text-sm text-red-600">
                Enter a valid expiration date (MM/YY)
              </p>
            )}
          </div>

          {/* CVV */}
          <div className="flex flex-col items-start justify-center w-[100%] md:w-[48%] gap-1 mt-4">
            <h1 className="font-semibold">CVV</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.cvv
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <CiBank />
              <input
                type="text"
                name="cvv"
                className="w-full bg-transparent grow"
                placeholder="CVC"
                value={paymentFormData.cvv}
                onChange={handleChange}
              />
            </label>
            {errors.cvv && (
              <p className="text-sm text-red-600">CVV must be 3 digits</p>
            )}
          </div>
        </div>

        {/* Card Name */}
        <div className="flex flex-col items-start justify-center w-full gap-1 mt-4">
          <h1 className="font-semibold">Name on Card</h1>
          <label
            className={`flex items-center w-full gap-2 border-2 ${
              errors.cardName
                ? "bg-red-100 border-red-400"
                : "bg-white border-black"
            } input input-bordered`}
          >
            <BsCreditCard2Back />
            <input
              type="text"
              name="cardName"
              className="w-full bg-transparent grow"
              placeholder="Enter the name on the card"
              value={paymentFormData.cardName}
              onChange={handleChange}
            />
          </label>
          {errors.cardName && (
            <p className="text-sm text-red-600">Card name is required</p>
          )}
        </div>
        {/* buttons */}
        <div className="flex items-center justify-between w-full gap-3 sm:gap-4">
          <button
            onClick={handlePreviousStep}
            className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mt-5 mb-5 text-sm sm:text-base text-black transition duration-300 md:w-[30%] bg-gray-300 rounded-lg hover:bg-gray-400 font-semibold"
          >
            <HiOutlineArrowNarrowLeft className="text-black text-base sm:text-lg" />
            <span className="hidden sm:inline">Previous</span>
          </button>
          <button
            type="submit"
            className="flex-1 sm:flex-none md:w-[30%] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mt-5 mb-5 text-sm sm:text-base md:text-lg text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600 font-semibold"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
