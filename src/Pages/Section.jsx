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
                <div className="flex flex-col items-center justify-center bg-white">
                    <div className="w-full flex flex-col items-center justify-center bg-[#d7f3d0] py-6 px-4 md:py-10 md:px-20">
                        <div className="flex items-center justify-between w-full">
                            {/* Back arrow */}
                            <div className="flex items-center justify-center p-2 bg-white rounded-full">
                                <IoIosArrowBack className="text-black" size={17} onClick={() => navigate(-1)} />
                            </div>
                            {/* category */}
                            <h1 className="text-sm font-semibold text-black md:text-base"> {displayName} </h1>
                            {/* Notifications icon */}
                            <div className="flex items-center justify-center p-2 bg-white rounded-full">
                                <IoNotificationsOutline className="text-black" size={17} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 bg-white pt-[10px] md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
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