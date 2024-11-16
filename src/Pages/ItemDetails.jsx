import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { BeveragesItems } from "../Utils/BeveragesItem";
import { BakeryItems } from "../Utils/BakeryItem";
import { DairyProductsItems } from "../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../Utils/MeatAndSeafoodItems";
import { PopularItems } from "../Utils/PopularItems";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { UserContext } from '../Components/Context/UserProvider';

const ItemDetails = () => {
  const navigate = useNavigate();
  const { sectionName, id } = useParams();
  const [item, setItem] = useState(null);
  const { cartItems, updateQuantity, addToCart } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  };
  
  const itemsMap = {
    beverages: BeveragesItems,
    fruitsandvegetables: FruitsAndVegetablesItem,
    meatandseafood: MeatAndSeafoodItems,
    dairyproducts: DairyProductsItems,
    bakery: BakeryItems,
    frozenfoods: FrozenFoodItems,
    popularitems: PopularItems,
  };

  useEffect(() => {
    const items = itemsMap[sectionName.toLowerCase()] || [];
    const foundItem = items.find((item) => item.id === parseInt(id));
    if (foundItem) {
      // Check if item exists in cart and merge its quantity
      const cartItem = cartItems.find(cart => cart.id === foundItem.id);
      setItem({
        ...foundItem,
        quantity: cartItem ? cartItem.quantity : 0
      });
    }
  }, [sectionName, id, cartItems]);

  if (!item) return <div>Item not found</div>;

  // Calculate total price
  const getItemPrice = (priceString) => {
    return Number(priceString.replace(/[^0-9.]/g, ""));
  };

  const itemPrice = getItemPrice(item.price);
  const totalPrice = (itemPrice * (item.quantity || 0)).toFixed(2);

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#CEEBD7] w-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-between w-full px-4 pt-5 sm:px-6 md:px-10 sm:pt-7">
            <div className="flex items-center justify-center p-2 bg-white rounded-full">
              <IoIosArrowBack className="text-green-500" size={17} onClick={() => navigate(-1)} />
            </div>
            <h1 className="text-[16px] sm:text-[20px]">Details</h1>
            <div className="flex items-center justify-center p-2 bg-white rounded-full">
              <IoNotificationsOutline className="text-green-500" size={17} />
            </div>
          </div>
          <div
            className="mx-auto mt-4 mb-5 bg-center bg-no-repeat bg-contain sm:mt-5 h-44 sm:h-52 w-44 sm:w-52 sm:mb-7"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-0 px-4 bg-white sm:px-5">
          <h1 className="mt-4 text-[28px] sm:text-[35px] font-bold">{item.title}</h1>
          <div className="flex items-center justify-between w-full mt-2 sm:mt-4">
            <p className="font-bold text-green-500 text-[20px] sm:text-[24px]">
              {item.price} <span className="font-semibold text-black text-[16px] sm:text-[18px]">/KG</span>
            </p>
            <div className="w-[30%] md:w-[12%] flex items-center justify-between mr-2 sm:mr-3 gap-1 md:gap-0">
              <button
                className="p-2 bg-gray-300 rounded-full sm:p-3 hover:text-white hover:bg-green-500"
                onClick={() => updateQuantity(item.id, -1)}
                disabled={!item.quantity}
              >
                <FaMinus />
              </button>
              <h1>{item.quantity || 0}KG</h1>
              <button
                className="p-2 bg-gray-300 rounded-full sm:p-3 hover:text-white hover:bg-green-500"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-0 mt-6 sm:mt-10">
            <h1 className="text-[22px] sm:text-[27px] font-semibold">Product Details</h1>
            <p className="mt-1 text-base text-gray-500 sm:mt-2 sm:text-lg">{item.description}</p>
          </div>
        </div>

        <footer className="sticky bottom-0 flex items-center justify-between w-full px-4 py-2 bg-white shadow-2xl sm:px-5 shadow-slate-400">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[13px] sm:text-[15px] text-black">Total Price</h1>
            <p className="text-[24px] sm:text-[30px] font-semibold text-green-500">
              ${totalPrice}
            </p>
          </div>
          <button 
            className="px-8 sm:px-10 py-2 sm:py-3 mt-4 sm:mt-6 text-white bg-green-600 rounded-[10px]"
            onClick={handleClick}
          >
            {item.quantity ? 'Update Cart' : 'Add to Cart'}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ItemDetails;