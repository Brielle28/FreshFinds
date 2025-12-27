import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartItemCard from "../Components/CartItems/CartItemCard";
import { UserContext } from "../Components/Context/UserProvider";
import { categories } from '../Utils/categories';
import { BeveragesItems } from "../Utils/BeveragesItem";
import { BakeryItems } from "../Utils/BakeryItem";
import { DairyProductsItems } from "../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../Utils/MeatAndSeafoodItems";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

// import { PopularItems } from "../Utils/PopularItems";

const itemsMap = {
    beverages: BeveragesItems,
    fruitsandvegetables: FruitsAndVegetablesItem,
    meatandseafood: MeatAndSeafoodItems,
    dairyproducts: DairyProductsItems,
    bakery: BakeryItems,
    frozenfoods: FrozenFoodItems,
    // popularitems: PopularItems,
};
const displayNames = {
    beverages: "Beverages",
    fruitsandvegetables: "Fruits and Vegetables",
    meatandseafood: "Meat and Seafood",
    dairyproducts: "Dairy Products",
    bakery: "Bakery",
    frozenfoods: "Frozen Foods",
};

const Section = () => {
    const navigate = useNavigate();
    const { sectionName } = useParams();
    const { likeArray, setLikeArray, cartItems, addToCart } = useContext(UserContext);
    const category = categories.find((cat) => cat.sectionName === sectionName);
    const items = category ? itemsMap[category.sectionName.toLowerCase()] : [];
    const displayName = displayNames[sectionName.toLowerCase()] || sectionName;

    if (!items.length) return <div>Section not found or no items available</div>;

    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center bg-white pb-20 sm:pb-24 md:pb-28">
                    <div className="w-full flex flex-col items-center justify-center bg-[#d7f3d0] py-4 sm:py-5 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20">
                        <div className="flex items-center justify-between w-full max-w-7xl">
                            {/* Back arrow */}
                            <button className="flex items-center justify-center p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-50 transition-colors">
                                <IoIosArrowBack className="text-black text-sm sm:text-base" size={17} onClick={() => navigate(-1)} />
                            </button>
                            {/* category */}
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black text-center px-2"> {displayName} </h1>
                            {/* Notifications icon */}
                            <button className="flex items-center justify-center p-1.5 sm:p-2 bg-white rounded-full hover:bg-gray-50 transition-colors">
                                <IoNotificationsOutline className="text-black text-sm sm:text-base" size={17} />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 bg-white pt-4 sm:pt-6 md:pt-8 w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
                        {items.map((item) => (
                            <CartItemCard
                                key={item.id}
                                item={item}
                                sectionName={sectionName}
                                imageUrl={item.imageUrl}
                                title={item.title}
                                price={item.price}
                                likeArray={likeArray}
                                setLikeArray={setLikeArray}
                                cartItems={cartItems}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Section;