import { useContext } from "react";
import CheckOutHeader from "../Components/CheckOut/CheckOutHeader";
import CheckoutSteps from "../Components/CheckOut/CheckoutSteps";
import Layout from "../Components/Layout";
import CheckOutPaymentAndSummary from "../Components/CheckOut/CheckOutPaymentAndSummary";
import CheckOutPersonalInfoAndSummary from "../Components/CheckOut/CheckOutPersonalInfoAndSummary";
import OrderConfirmation from "../Components/CheckOut/OrderConfirmation";
import { UserContext } from "../Components/Context/UserProvider";

const CheckOut = () => {
  const { currentStep } = useContext(UserContext);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full gap-0 bg-white">
          <CheckOutHeader />
          <CheckoutSteps />
        <div className="flex items-center justify-center w-full">
          {currentStep === 0 && <CheckOutPersonalInfoAndSummary />}
          {currentStep === 1 && <CheckOutPaymentAndSummary />}
          {currentStep === 2 && <OrderConfirmation />}
        </div>
      </div>
    </Layout>
  );
};

export default CheckOut;
