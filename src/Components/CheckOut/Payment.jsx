import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
const Payment = () => {
  const { handleNext, handlePreviousStep } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        Payment
        <button onClick={handleNext} className="mt-4 btn btn-primary">
        Next
      </button>
      <button onClick={handlePreviousStep} className="mt-4 btn btn-primary">
        Previous
      </button>
      
        </div>
    </>
  );
};

export default Payment;
