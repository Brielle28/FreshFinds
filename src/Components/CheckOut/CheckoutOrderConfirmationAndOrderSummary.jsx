import OrderSummary from "../CheckOut/OrderSummary";
import OrderConfirmation from "./OrderConfirmation";
const CheckoutOrderConfirmationAndOrderSummary = () => {
  return (
    <>
     <div className="flex flex-col-reverse md:flex-row items-start justify-center w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mt-24 sm:mt-28 md:mt-32 gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-20 sm:pb-24 md:pb-28">
      <div className="w-full md:w-[48%] lg:w-[46%]">
        <OrderConfirmation/>
      </div>
      <div className="w-full md:w-[48%] lg:w-[35%]">
        <OrderSummary />
      </div>
    </div>
    </>
  )
}

export default CheckoutOrderConfirmationAndOrderSummary