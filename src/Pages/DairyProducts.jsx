import DairyProductsHeader from "../Components/DairyProducts/DairyProductsHeader"
import DairyProductsItemsList from "../Components/DairyProducts/DairyProductsItemsList"
import Footer from "../Components/Footer/Footer"
const DairyProducts = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <DairyProductsHeader/>
      <DairyProductsItemsList/>
      <Footer/>
    </div>
    </>
  )
}

export default DairyProducts