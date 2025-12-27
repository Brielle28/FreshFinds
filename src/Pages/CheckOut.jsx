import { useContext } from "react";
import CheckOutHeader from "../Components/CheckOut/CheckOutHeader";
import CheckoutSteps from "../Components/CheckOut/CheckoutSteps";
import Layout from "../Components/Layout";
import CheckOutPaymentAndSummary from "../Components/CheckOut/CheckOutPaymentAndSummary";
import CheckOutPersonalInfoAndSummary from "../Components/CheckOut/CheckOutPersonalInfoAndSummary";
import { UserContext } from "../Components/Context/UserProvider";
import CheckoutOrderConfirmationAndOrderSummary from "../Components/CheckOut/CheckoutOrderConfirmationAndOrderSummary";

const CheckOut = () => {
  const { currentStep } = useContext(UserContext);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full gap-0 bg-white min-h-screen">
          <CheckOutHeader />
          <CheckoutSteps />
        <div className="flex items-center justify-center w-full">
          {currentStep === 0 && <CheckOutPersonalInfoAndSummary />}
          {currentStep === 1 && <CheckOutPaymentAndSummary />}
          {currentStep === 2 && < CheckoutOrderConfirmationAndOrderSummary />}
        </div>
      </div>
    </Layout>
  );
};

export default CheckOut;
