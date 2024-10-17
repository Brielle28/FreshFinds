import AddToCart from "./AddToCart";
import CartItemLike from "./CartItemLike";

const CartItemCard = ({ 
  imageUrl, 
  title, 
  price, 
  item, 
  likeArray, 
  setLikeArray,
  cartItems,
  addToCart
}) => {
  // Find if this specific item is in cart
  const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

  return (
    <div className="w-full my-5 bg-white">
      <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
        <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full">
          <CartItemLike 
            item={item} 
            likeArray={likeArray} 
            setLikeArray={setLikeArray} 
          />
          <div
            className="w-40 h-40 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <h4 className="font-extrabold text-[20px]">{title}</h4>
          <h3 className="text-green-500 font-bold text-[13px]">
            {price} <span className="text-black font-light text-[10px]">/KG</span>
          </h3>
        </div>
        <AddToCart 
          item={item} 
          itemInCart={itemInCart}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default CartItemCard;