import CartItemRating from "./CartItemRating"
import { FaPlus } from "react-icons/fa6";
const CartItemCard = ({ imageUrl, title, price }) => {
    return (
        <>
            <div className="w-full my-5 bg-white">
                <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
                    <div className="flex items-center justify-center bg-[#dcf3d6] rounded-t-[15px] w-full">
                        <div className='w-40 h-40 bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${imageUrl})` }}>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                        <h4 className="font-extrabold text-[20px]">{title}</h4>
                        <CartItemRating />
                        <h3 className="text-green-500 font-bold text-[13px]">
                            {price}
                            <span className="text-black font-light text-[10px]">/KG</span>
                        </h3>
                    </div>
                    <button className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 text-white bg-green-500 rounded-br-lg">
                        <FaPlus />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItemCard