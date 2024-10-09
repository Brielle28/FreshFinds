import { Link } from "react-router-dom";

const CategoryCarouselItem = ({ imageUrl, categoryName, links }) => {
    return (
        <Link to={links}>
            <div className="carousel-item inline-block flex-col justify-start text-center items-center gap-7 bg-[#d7f3d0] px-4 rounded-t-[200px] pb-7">
                <div className='p-3 bg-white rounded-full mt-5 mb-10'>
                    <div
                        className="w-32 h-32 bg-center bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                </div>
                <h1 className='text-blue-950 font-bold text-[15px]'>
                    {categoryName}
                </h1>
            </div>
        </Link>
    );
};
export default CategoryCarouselItem;
