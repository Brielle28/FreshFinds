import OrderSummary from "../CheckOut/OrderSummary";
import Payment from "./Payment";

const CheckOutPaymentAndSummary = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center w-[100%] mt-20 gap-[10px] md:gap-0 lg:gap-0">
      <div className=" md:w-[46%]">
        <Payment />
      </div>
      <div className=" md:w-[35%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOutPaymentAndSummary;
