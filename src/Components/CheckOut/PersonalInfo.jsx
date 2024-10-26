import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { PiCityFill } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineSignpost } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

const PersonalInfo = () => {
  const { handleNext } = useContext(UserContext);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    fullName: "",
    email: "",
    streetAddress: "",
  });

  const [errors, setErrors] = useState({
    state: false,
    city: false,
    zipCode: false,
    phoneNumber: false,
    fullName: false,
    email: false,
    streetAddress: false,
  });

  const handleValidation = () => {
    const newErrors = {
      state: formData.state.trim() === "",
      city: formData.city.trim() === "",
      zipCode: formData.zipCode.trim().length !== 5,
      phoneNumber: formData.phoneNumber.trim().length !== 11,
      fullName: formData.fullName.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      streetAddress: formData.streetAddress.trim() === "",
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
      handleNext(); // Call handleNext only if validation passes
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="flex flex-col items-start px-5 sm:px-10 pt-5 justify-center bg-white rounded-[7px]">
      <h2 className="text-black font-bold text-[20px] sm:text-[25px]">
        Personal Info
      </h2>

      <form onSubmit={handleSubmit} className="w-[90%] mt-5">
        {/* Full Name */}
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <h1 className="font-semibold">Full Name</h1>
          <label
            className={`flex items-center w-full gap-2 border-2 ${
              errors.fullName
                ? "bg-red-100 border-red-400"
                : "bg-white border-black"
            } input input-bordered`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="fullName"
              className="w-full bg-transparent grow"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>
          {errors.fullName && (
            <p className="text-sm text-red-600">Full name is required</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col items-start justify-center w-full gap-1 mt-4">
          <h1 className="font-semibold">Email</h1>
          <label
            className={`flex items-center w-full gap-2 border-2 ${
              errors.email
                ? "bg-red-100 border-red-400"
                : "bg-white border-black"
            } input input-bordered`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent grow"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && (
            <p className="text-sm text-red-600">Please enter a valid email</p>
          )}
        </div>

        {/* Street Address */}
        <div className="flex flex-col items-start justify-center w-full gap-1 mt-4">
          <h1 className="font-semibold">Street Address</h1>
          <label
            className={`flex items-center w-full gap-2 border-2 ${
              errors.streetAddress
                ? "bg-red-100 border-red-400"
                : "bg-white border-black"
            } input input-bordered`}
          >
            <FaRegAddressBook />

            <input
              type="text"
              name="streetAddress"
              className="w-full bg-transparent grow"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
            />
          </label>
          {errors.streetAddress && (
            <p className="text-sm text-red-600">Street address is required</p>
          )}
        </div>

        {/* State and City */}
        <div className="flex flex-col w-full mt-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-start justify-center w-full md:w-[48%] gap-1">
            <h1 className="font-semibold">State</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.state
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 0a8 8 0 0 0-8 8c0 3.5 6 8 8 8s8-4.5 8-8a8 8 0 0 0-8-8zm0 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
              </svg>

              <input
                type="text"
                name="state"
                className="w-full bg-transparent grow"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </label>
            {errors.state && (
              <p className="text-sm text-red-600">State is required</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center w-full md:w-[48%] gap-1 mt-4 md:mt-0">
            <h1 className="font-semibold">City</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.city
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <PiCityFill />
              <input
                type="text"
                name="city"
                className="w-full bg-transparent grow"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            {errors.city && (
              <p className="text-sm text-red-600">City is required</p>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full mt-4 md:flex-row md:justify-between">
          {/* Zip Code */}
          <div className="flex flex-col items-start justify-center w-[100%] md:w-[48%] gap-1 mt-4">
            <h1 className="font-semibold">Zip Code</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.zipCode
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <MdOutlineSignpost />
              <input
                type="text"
                name="zipCode"
                className="w-full bg-transparent grow"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </label>
            {errors.zipCode && (
              <p className="text-sm text-red-600">Zip code must be 5 digits</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-start justify-center w-[100%] md:w-[48%] gap-1 mt-4">
            <h1 className="font-semibold">Phone Number</h1>
            <label
              className={`flex items-center w-full gap-2 border-2 ${
                errors.phoneNumber
                  ? "bg-red-100 border-red-400"
                  : "bg-white border-black"
              } input input-bordered`}
            >
              <FcCellPhone />
              <input
                type="tel"
                name="phoneNumber"
                className="w-full bg-transparent grow"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>
            {errors.phoneNumber && (
              <p className="text-sm text-red-600">
                Phone number must be 11 digits
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:items-end md:justify-end">
          <button
            type="submit"
            // onClick={handleNext}
            className="w-full px-4 py-2 mt-5 mb-5 text-white transition duration-300 md:w-[30%] bg-green-500 rounded-lg hover:bg-green-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
