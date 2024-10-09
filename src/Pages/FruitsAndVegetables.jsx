import Footer from "../Components/Footer/Footer"
import FruitsAndVegetablesHeader from "../Components/FruitsAndVegetables/FruitsAndVegetablesHeader"
import FruitsAndVegetablesItemList from "../Components/FruitsAndVegetables/FruitsAndVegetablesItems/FruitsAndVegetablesItemList"

const FruitsAndVegetables = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
    <FruitsAndVegetablesHeader/>
    <FruitsAndVegetablesItemList/>
    <Footer/>
    </div>
    </>
  )
}

export default FruitsAndVegetables