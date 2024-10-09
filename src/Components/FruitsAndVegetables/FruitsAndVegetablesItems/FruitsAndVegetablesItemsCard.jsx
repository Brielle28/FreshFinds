import FruitsAndVegetablesRating from "./FruitsAndVegetablesRating"
import { FaPlus } from "react-icons/fa6";
const FruitsAndVegetablesItemsCard = ({ imageUrl, title, price }) => {
    return (
        <>
            <div className="my-5 w-full bg-white">
                <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
                    <div className="flex items-center justify-center bg-[#dcf3d6] rounded-t-[15px] w-full">
                        <div className='w-40 h-40 bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${imageUrl})` }}>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 w-full">
                        <h4 className="font-extrabold text-[20px]">{title}</h4>
                        <FruitsAndVegetablesRating />
                        <h3 className="text-green-500 font-bold text-[13px]">
                            {price}
                            <span className="text-black font-light text-[10px]">/KG</span>
                        </h3>
                    </div>
                    <button className="flex items-center justify-center text-white rounded-br-lg w-10 h-10 absolute bottom-0 right-0 bg-green-500">
                        <FaPlus />
                    </button>
                </div>
            </div>
        </>
    )
}

export default FruitsAndVegetablesItemsCard