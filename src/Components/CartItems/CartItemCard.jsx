import AddToCart from "./AddToCart";
import CartItemLike from "./CartItemLike";
import { Link } from "react-router-dom";

const CartItemCard = ({
  imageUrl,
  title,
  price,
  item,
  likeArray,
  setLikeArray,
  cartItems,
  addToCart,
  sectionName
}) => {
  const itemInCart = cartItems?.find(cartItem => cartItem.id === item.id);

  return (
    <div className="w-full my-5 bg-white">
      <div className="flex flex-col items-start justify-center bg-white gap-2 p-2 shadow-2xl rounded-[15px] w-full relative">
        <div className="relative flex items-center justify-center bg-[#C9EAD3] rounded-t-[15px] w-full">
          {/* Like button outside of Link */}
          <CartItemLike
            item={item}
            likeArray={likeArray}
            setLikeArray={setLikeArray}
          />
          {/* Link only wraps the image and text content */}

          <Link to={`/${sectionName}/${item.id}`} className="w-full">
            <div
              className="w-32 h-32 bg-center bg-no-repeat bg-contain mx-h-auto md:h-40 md:w-40"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </Link>
        </div>
        <Link to={`/${sectionName}/${item.id}`} className="w-full">
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <h4 className="font-extrabold text-[20px]">{title}</h4>
            <h3 className="text-green-500 font-bold text-[13px]">
              {price} <span className="text-black font-light text-[10px]">/KG</span>
            </h3>
          </div>
        </Link>
        {/* Add to Cart button outside of Link */}
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