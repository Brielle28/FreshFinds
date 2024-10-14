import CartItemCard from "../CartItems/CartItemCard"
import { BeveragesItems } from "../../Utils/BeveragesItem"
const BeveragesItemsList = () => {
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[90%] md:gap-7 lg:w-[80%]">
            {BeveragesItems.map((product, index) => (
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

export default BeveragesItemsList;
