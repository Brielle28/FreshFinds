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
    <div className="w-full min-h-screen bg-white">
      {/* Minimal Header */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoIosArrowBack className="text-gray-700" size={24} />
          </button>
          <h1 className="text-sm font-medium text-gray-600 uppercase tracking-wider">Product Details</h1>
          <button className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IoNotificationsOutline className="text-gray-700" size={24} />
          </button>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-square bg-gradient-to-br from-[#CEEBD7] to-[#E8F5E9] rounded-2xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-contain p-8 sm:p-12 md:p-16"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {item.title}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">
                  {item.price}
                </span>
                <span className="text-lg sm:text-xl text-gray-500">/KG</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 py-4">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-1">
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={!item.quantity}
                >
                  <FaMinus className="text-gray-600" />
                </button>
                <span className="w-16 text-center text-lg font-semibold text-gray-900">
                  {item.quantity || 0} KG
                </span>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Product Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {item.description}
              </p>
            </div>

            {/* Price & Add to Cart */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Price</p>
                  <p className="text-3xl sm:text-4xl font-bold text-green-600">
                    ${totalPrice}
                  </p>
                </div>
                {item.quantity > 0 && (
                  <div className="text-right">
                    <p className="text-xs text-gray-400">
                      {item.quantity} KG × {item.price}
                    </p>
                  </div>
                )}
              </div>
              
              <button 
                className="w-full py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                onClick={handleClick}
              >
                {item.quantity ? 'Update Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;