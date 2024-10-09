import StarRating from './StarRating';

const PopularCard = ({ imageUrl, title, price, rating }) => {
    return (
        <div className="my-5 w-full">
            <div className="flex flex-col items-start justify-center gap-2 p-2 shadow-2xl rounded-[15px] w-full">
                <div className="flex items-center justify-center bg-[#dcf3d6] rounded-t-[15px] w-full">
                    <div className='w-40 h-40 bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${imageUrl})` }}>
                     </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h4 className="font-extrabold text-[20px]">{title}</h4>
                    <StarRating rating={rating} />
                    <h3 className="text-green-500 font-bold text-[13px]">
                        {price}
                        <span className="text-black font-light text-[10px]">/KG</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
