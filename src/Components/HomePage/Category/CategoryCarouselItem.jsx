const CategoryCarouselItem = ({ imageUrl, categoryName }) => {
    return (
        <div className="carousel-item inline-block flex-col justify-start text-center items-center gap-7 bg-[#d7f3d0] px-4 rounded-t-[200px] pb-7">
            <div className='p-7 bg-white rounded-full mt-5 mb-10'>
                <div
                    className="w-20 h-20 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </div>
            <h1 className='text-blue-950 font-bold text-[`15px]'>
                {categoryName}
            </h1>
        </div>
    );
};
export default CategoryCarouselItem;