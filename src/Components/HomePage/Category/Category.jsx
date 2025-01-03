// import CarouselItem from "./CategoryCarouselItem";
// import {categories } from "../../../Utils/categories"
// const Category = () => {
//     return (
//         <div className='flex flex-col items-start justify-start w-[80%] my-8'>
//             <h1 className='text-black font-bold text-[30px]'>Category</h1>
//             <div className="w-full gap-6 my-10 overflow-x-scroll carousel rounded-box whitespace-nowrap scroll-smooth scroll-snap-x">
//                 {/* Mapping through categories to generate carousel items */}
//                 {categories.map((category, index) => (
//                     <CarouselItem
//                         key={index}
//                         imageUrl={category.imageUrl}
//                         categoryName={category.name}
//                         links = {category.links}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Category;

import CategoryCarouselItem from './CategoryCarouselItem';
import { categories } from '../../../Utils/categories';

const Category = () => {
  return (
    <div className="flex flex-col items-start justify-start w-[80%] my-8">
      <h1 className="text-black font-bold text-[30px]">Category</h1>
      <div className="w-full gap-6 my-10 overflow-x-scroll carousel rounded-box whitespace-nowrap scroll-smooth scroll-snap-x">
        {categories.map((category, index) => (
          <CategoryCarouselItem
            key={index}
            imageUrl={category.imageUrl}
            categoryName={category.name}
            sectionName={category.sectionName}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;