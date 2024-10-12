const CartItemRating = () => {
    return (
        <>
            <div className="rating">
                <input type="radio" name="rating-2" className="w-4 h-4 bg-orange-400 mask mask-star-2" />
                <input type="radio" name="rating-2" className="w-4 h-4 bg-orange-400 mask mask-star-2" />
                <input
                    type="radio"
                    name="rating-2"
                    className="w-4 h-4 bg-orange-400 mask mask-star-2"
                    defaultChecked />
                <input type="radio" name="rating-2" className="w-4 h-4 bg-orange-400 mask mask-star-2" />
                <input type="radio" name="rating-2" className="w-4 h-4 bg-orange-400 mask mask-star-2" />
            </div>
        </>
    )
}

export default CartItemRating
