import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const CheckoutSteps = () => {
  const { currentStep, steps } = useContext(UserContext);

  return (
    <>
      <div className="fixed z-10 flex items-center justify-center w-full top-[60px] sm:top-[70px] md:top-[80px] lg:top-[90px] bg-white shadow-sm">
        <div className="flex items-center justify-center w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
          <ol className="flex items-center justify-center w-full py-3 sm:py-4">
            {steps.map((step, index) => (
                <li
                  key={index}
                  className={`flex w-full items-center ${
                    index < steps.length - 1
                      ? index <= currentStep
                        ? "text-green-500 after:w-full after:h-0.5 sm:after:h-1 after:border-b after:border-green-500"
                        : "after:w-full after:h-0.5 sm:after:h-1 after:border-b after:border-gray-200"
                      : ""
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:h-12 lg:w-12 rounded-full flex-shrink-0 ${
                      index <= currentStep ? "bg-green-500" : "bg-gray-100"
                    }`}
                  >
                    {index <= currentStep ? (
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Z" />
                      </svg>
                    )}
                  </span>
                </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default CheckoutSteps;
