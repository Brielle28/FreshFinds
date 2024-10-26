import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
const Payment = () => {
  const { handleNext, handlePreviousStep } = useContext(UserContext);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: false,
    expirationDate: false,
    cvv: false,
    cardName: false,
  });

  const handleValidation = () => {
    const newErrors = {
      cardNumber: formData.cardNumber.trim().length !== 16, // Card number should be 16 digits
      expirationDate: !/^\d{2}\/\d{2}$/.test(formData.expirationDate), // MM/YY format
      cvv: formData.cvv.trim().length !== 3, // CVV should be 3 digits
      cardName: formData.cardName.trim() === "",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log(formData, "Form submitted");
      handleNext();
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="flex flex-col items-start px-5 sm:px-10 pt-5 justify-center bg-white rounded-[7px] ">
      <h2 className="text-black font-bold text-[20px] sm:text-[25px]">
        Payment Method
      </h2>

      <form onSubmit={handleSubmit} className="w-[93%] mt-5">
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
              value={formData.cardNumber}
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
                value={formData.expirationDate}
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
                value={formData.cvv}
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
              value={formData.cardName}
              onChange={handleChange}
            />
          </label>
          {errors.cardName && (
            <p className="text-sm text-red-600">Card name is required</p>
          )}
        </div>
        {/* buttons */}
        <div className="flex items-center justify-between w-full">
          <button
            onClick={handlePreviousStep}
            className="hidden md:flex items-center justify-start gap-1 px-4 py-2 mt-5 mb-5 text-white transition duration-300 md:w-[30%] bg-gray-300 rounded-lg"
          >
            <HiOutlineArrowNarrowLeft className="text-black" />
            <h1 className="text-black">Previous</h1>
          </button>
          {/* previous button for small screen */}
          <button
            onClick={handlePreviousStep}
            className="flex md:hidden items-center justify-start mt-5 mb-5 text-white transition duration-300 md:w-[30%] bg-transparent rounded-lg"
          >
            <HiArrowCircleLeft className="text-black" size={25} />
          </button>
          <button
            type="submit"
            className="hidden md:flex w-full px-4 py-2 mt-5 mb-5 text-white transition duration-300 md:w-[30%] bg-green-500 rounded-lg hover:bg-green-600"
          >
            Next
          </button>
          {/* next button for small screen */}
          <button
            type="submit"
            className="flex mt-5 mb-5 text-white transition duration-300 md:hidden"
          >
            <HiArrowCircleRight size={25}  className="text-green-500"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
