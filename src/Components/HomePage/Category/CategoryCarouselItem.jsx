// import { Link } from "react-router-dom";

// const CategoryCarouselItem = ({ imageUrl, categoryName, links }) => {
//     return (
//         <Link to={links}>
//             <div className="carousel-item inline-block flex-col justify-start text-center items-center gap-7 bg-[#d7f3d0] px-4 rounded-t-[200px] pb-7">
//                 <div className='p-3 mt-5 mb-10 bg-white rounded-full'>
//                     <div
//                         className="w-32 h-32 bg-center bg-no-repeat bg-contain"
//                         style={{ backgroundImage: `url(${imageUrl})` }}
//                     ></div>
//                 </div>
//                 <h1 className='text-blue-950 font-bold text-[15px]'>
//                     {categoryName}
//                 </h1>
//             </div>
//         </Link>
//     );
// };
// export default CategoryCarouselItem;
import { useNavigate } from 'react-router-dom';

const CategoryCarouselItem = ({ imageUrl, categoryName, sectionName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/section/${sectionName}`);
  };

  return (
    <button
      className="carousel-item flex-shrink-0 flex flex-col justify-start text-center items-center gap-3 sm:gap-5 md:gap-7 bg-[#d7f3d0] px-3 sm:px-4 md:px-6 rounded-t-[150px] sm:rounded-t-[180px] md:rounded-t-[200px] pb-4 sm:pb-5 md:pb-7 hover:bg-[#c4e8b8] transition-colors"
      onClick={handleClick}
    >
      <div className="p-2 sm:p-2.5 md:p-3 mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-6 md:mb-10 bg-white rounded-full">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <h1 className="text-blue-950 font-bold text-xs sm:text-sm md:text-base lg:text-[15px] px-2">{categoryName}</h1>
    </button>
  );
};

export default CategoryCarouselItem;
