import { PopularItems } from '../../Utils/PopularItems';
import PopularCard from './PopularCard';
const PopularList = () => {
    return (
        <div className="flex flex-row items-start justify-start gap-7 overflow-x-auto w-[100%]">
            {PopularItems.map((product, index) => (
                <PopularCard
                    key={index}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                />
            ))}
        </div>
    );
};
export default PopularList;
