import StarRating from './StarRating';

const PopularCard = ({ imageUrl, title, price, rating }) => {
    return (
        <div className="my-3 sm:my-4 md:my-5 flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
            <div className="flex flex-col items-start justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 md:p-3 shadow-lg sm:shadow-xl md:shadow-2xl rounded-xl sm:rounded-[15px] w-full hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-center bg-[#dcf3d6] rounded-t-xl sm:rounded-t-[15px] w-full">
                    <div className='w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${imageUrl})` }}>
                     </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 sm:gap-1.5 md:gap-2 w-full px-1">
                    <h4 className="font-extrabold text-sm sm:text-base md:text-lg lg:text-[20px] line-clamp-2">{title}</h4>
                    <StarRating rating={rating} />
                    <h3 className="text-green-500 font-bold text-xs sm:text-sm md:text-[13px]">
                        {price}
                        <span className="text-black font-light text-[9px] sm:text-[10px]">/KG</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
