import { PopularItems } from '../../../Utils/PopularItems';
import PopularCard from './PopularCard';
const PopularList = () => {
    return (
        <div className="flex flex-row items-start justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto w-full scrollbar-hide pb-2">
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
