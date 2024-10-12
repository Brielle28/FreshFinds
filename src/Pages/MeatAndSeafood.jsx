import Footer from "../Components/Footer/Footer"
import MeatAndSeafoodHeader from "../Components/MeatAndSeafood/MeatAndSeafoodHeader"
import MeatAndSeafoodItemList from "../Components/MeatAndSeafood/MeatAndSeafoodItemList"

const MeatAndSeafood = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <MeatAndSeafoodHeader/>
      <MeatAndSeafoodItemList/>
      <Footer/>
    </div>
    </>
  )
}

export default MeatAndSeafood