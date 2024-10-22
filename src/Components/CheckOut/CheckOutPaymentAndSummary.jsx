import OrderSummary from "../Summary/OrderSummary";
import Payment from "./Payment";

const CheckOutPaymentAndSummary = () => {
  return (
    <div className="w-[80%] flex flex-row items-start justify-center mt-10">
      <div className="w-[50%]">
        <Payment />
      </div>
      <div className="w-[50%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOutPaymentAndSummary;
