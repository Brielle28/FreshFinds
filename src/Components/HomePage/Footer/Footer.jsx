// import React from 'react'
// import { IoHome } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoPersonOutline } from "react-icons/io5";
// const Footer = () => {
//     return (
//         <>
//             <div className='flex flex-row items-center justify-between px-[175px] mt-10 w-full bg-white'>
//                 <div className='flex flex-col items-center justify-center '>
//                     <IoHome className='text-[30px]' />
//                     <h3 className='text-[18px] text-black font-light'>
//                         Home
//                     </h3>
//                 </div>
//                 <div className='flex flex-col items-center justify-center '>
//                     <FaRegHeart className='text-[30px]' />
//                     <h3 className='text-[18px] text-black font-light'>
//                         Favourite
//                     </h3>
//                 </div>
//                 <div className='flex flex-col items-center justify-center '>
//                     <FiShoppingCart className='text-[30px]'/>
//                     <h3 className='text-[18px] text-black font-light'>
//                         Cart
//                     </h3>
//                 </div>
//                 <div className='flex flex-col items-center justify-center '>
//                     <IoPersonOutline className='text-[30px]'/>
//                     <h3 className='text-[18px] text-black font-light'>
//                         Profile
//                     </h3>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Footer
import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className='sticky bottom-0 flex flex-row items-center justify-between px-4 sm:px-[50px] md:px-[175px] py-4 w-full bg-white'>
                <div className='flex flex-col items-center justify-center '>
                    <IoHome className='text-[24px] md:text-[30px]' />
                    <h3 className='text-[14px] md:text-[18px] text-black font-light'>
                        Home
                    </h3>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <FaRegHeart className='text-[24px] md:text-[30px]' />
                    <h3 className='text-[14px] md:text-[18px] text-black font-light'>
                        Favourite
                    </h3>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <FiShoppingCart className='text-[24px] md:text-[30px]' />
                    <h3 className='text-[14px] md:text-[18px] text-black font-light'>
                        Cart
                    </h3>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <IoPersonOutline className='text-[24px] md:text-[30px]' />
                    <h3 className='text-[14px] md:text-[18px] text-black font-light'>
                        Profile
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Footer;
