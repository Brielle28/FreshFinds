import CartItemCard from "../CartItems/CartItemCard"
import {FrozenFoodItems} from "../../Utils/FrozenFoodsItems"
const FrozenFoodsItemsList = () => {
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
            {FrozenFoodItems.map((product, index) => (
                <CartItemCard
                    key={index}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default FrozenFoodsItemsList;
