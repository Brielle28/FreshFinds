import OrderSummary from "../Summary/OrderSummary";
import Payment from "./Payment";

const CheckOutPaymentAndSummary = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-center w-[90%] mt-20 gap-[40px] md:gap-[5%]">
      <div className="flex-1 md:w-[52%]">
        <Payment />
      </div>
      <div className="flex-1 md:w-[35%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOutPaymentAndSummary;
