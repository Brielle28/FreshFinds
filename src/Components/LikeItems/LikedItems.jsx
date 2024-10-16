import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { IoClose } from "react-icons/io5";
const LikedItems = () => {
  const { likeArray } = useContext(UserContext);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:py-10 md:px-20">
      {likeArray.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {likeArray.map((like) => (
            <div key={like.id} className="p-4">
              <div className="bg-[#D7F3D0] p-5 rounded-[5px] relative">
                <button className="p-2 rounded-[30px] bg-white absolute right-3 top-3">
                  <IoClose className="text-green-500" />
                </button>
                <div
                  className="w-40 h-40 bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${like.imageUrl})` }}
                ></div>
              </div>
              <h1 className="font-bold text-[20px]">{like.title}</h1>
              <h5 className="font-medium text-green-500 text-[15px]">
                {like.price}
                <span className="text-black font-medium text-[11px]">/Kg</span>
              </h5>
            </div>
          ))}
        </div>
      ) : (
        <p>No liked items</p>
      )}
    </div>
  );
};

export default LikedItems;
