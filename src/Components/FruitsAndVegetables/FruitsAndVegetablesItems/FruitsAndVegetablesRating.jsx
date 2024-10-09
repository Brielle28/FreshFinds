const FruitsAndVegetablesRating = () => {
    return (
        <>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 w-4 h-4"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
            </div>
        </>
    )
}

export default FruitsAndVegetablesRating
