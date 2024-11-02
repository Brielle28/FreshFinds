import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const OrderConfirmation = () => {
  const { handlePreviousStep } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full md:px-0 px-5 bg-white rounded-lg md:w-[100%]">
        <h2 className="mt-4 text-lg font-bold text-black sm:text-xl lg:text-2xl">
          Order Confirmation
        </h2>
        {/* <p className="font-thin text-[23px] mt-1">
          Checkyour information
        </p> */}
        <form className="flex flex-col items-start justify-start w-[80%] mt-5 ">
          <div className="flex items-center justify-between w-full">
            <div>
              <p>
                first name 
              </p>
              <p>
                Nnadozie
              </p>
            </div>
            <div>
              <p>
                last Name 
              </p>
              <p>
                Chukwuemerie Clara
              </p>
            </div>
          </div>
        </form>
        <div>
          <button> Order </button>
          <button
            onClick={handlePreviousStep}
            className="bg-green-500 p-5 rounded-[20px] text-white"
          >
            {" "}
            Previous{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
