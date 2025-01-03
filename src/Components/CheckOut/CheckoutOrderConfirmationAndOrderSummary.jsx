import OrderSummary from "../CheckOut/OrderSummary";
import OrderConfirmation from "./OrderConfirmation";
const CheckoutOrderConfirmationAndOrderSummary = () => {
  return (
    <>
     <div className="flex flex-col-reverse md:flex-row items-start justify-center w-[100%] mt-20 gap-[10px] md:gap-0 lg:gap-0">
      <div className=" md:w-[46%]">
        <OrderConfirmation/>
      </div>
      <div className=" md:w-[35%]">
        <OrderSummary />
      </div>
    </div>
    </>
  )
}

export default CheckoutOrderConfirmationAndOrderSummary