import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { RxQuestionMarkCircled } from "react-icons/rx";

const OrderSummary = () => {
  const { cartItems, getTotalAmount } = useContext(UserContext);

  return (
    <div className="flex flex-col items-start justify-start w-full md:px-0 px-5 bg-white rounded-lg md:w-[100%]">
      <h2 className="mt-4 text-lg font-bold text-black sm:text-xl lg:text-2xl">
        Order Summary
      </h2>

      <div className="flex flex-col items-start justify-start mt-3 w-full sm:max-h-[250px] overflow-y-auto bg-white rounded-lg p-4">
        {cartItems.length > 0 ? (
          <div className="flex flex-col w-full space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between w-full gap-4 p-2 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#D7F3D0] p-2 rounded-md">
                    <div
                      className="w-16 h-16 bg-center bg-no-repeat bg-contain sm:w-20 sm:h-20"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[10px] font-bold sm:text-base lg:text-lg">
                      {item.title}
                    </h1>
                    <p className="text-[10px] text-gray-500 sm:text-sm lg:text-base">
                      Category: {item.category}
                    </p>
                    <p className="text-[10px] text-gray-500 md:text-[15px] lg:text-base">
                      Price: {item.price}{" "}
                      <span className="font-medium text-black text-[10px]">
                        /Kg
                      </span>
                    </p>
                    <p className="text-[10px] text-gray-500 lg:text-base">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                  <p className="text-[10px] md:text-[17px] font-medium">
                    $
                    {Number(item.price.replace(/[^0-9.]/g, "")) *
                      item.quantity || "0.00"}
                  </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[200px] bg-[#D7F3D0] rounded-lg">
            <p className="text-lg font-bold sm:text-xl">No items in cart</p>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full p-4 mt-3 bg-white">
        <div className="flex items-center justify-between mb-2">
          <h1 className="flex items-center text-sm font-semibold sm:text-base">
            Subtotal
            <RxQuestionMarkCircled className="ml-2" />
          </h1>
          <p className="text-sm font-semibold sm:text-base">${getTotalAmount()}</p>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-300">
          <h1 className="text-sm font-semibold sm:text-base">
            Estimated Delivery Fees
          </h1>
          <p className="text-sm font-semibold sm:text-base">free</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center text-sm font-semibold sm:text-base">
            Total
            <RxQuestionMarkCircled className="ml-2" />
          </h1>
          <p className="text-sm font-semibold sm:text-base">${getTotalAmount()}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
