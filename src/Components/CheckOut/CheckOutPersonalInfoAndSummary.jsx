import OrderSummary from "../Summary/OrderSummary";
import PersonalInfo from "./PersonalInfo";

const CheckOutPersonalInfoAndSummary = () => {
  return (
    <div className="flex flex-row items-start justify-center w-[80%] mt-10 ">
      <div className="w-[50%]">
        <PersonalInfo />
      </div>
      <div className="w-[50%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default   CheckOutPersonalInfoAndSummary;
