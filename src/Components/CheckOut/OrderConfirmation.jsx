import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const OrderConfirmation = () => {
  const { handlePreviousStep } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <h1>OrderConfirmation</h1>
        <button> Order </button>
        <button onClick={handlePreviousStep} className="bg-green-500 p-5 rounded-[20px] text-white" > Previous </button>
      </div>
    </>
  );
};

export default OrderConfirmation;
