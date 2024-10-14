import BeveragesHeader from "../Components/Beverages/BeveragesHeader"
import Footer from "../Components/Footer/Footer"
import BeveragesItemsList from "../Components/Beverages/BeveragesItemsList"

const Beverages = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center'>
      <BeveragesHeader/>
      <BeveragesItemsList/>
      <Footer/>
    </div>
    </>
  )
}

export default Beverages