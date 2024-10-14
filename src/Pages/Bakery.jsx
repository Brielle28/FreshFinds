import BakeryHeader from '../Components/Bakery/BakeryHeader'
import Footer from '../Components/Footer/Footer'
import BakeryItemList from '../Components/Bakery/BakeryItemList'

const Bakery = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <BakeryHeader/>
      <BakeryItemList/>
      <Footer/>      
    </div>
    </>
  )
}

export default Bakery