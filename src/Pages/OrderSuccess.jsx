// import { MdHome } from "react-icons/md";
// import "../CssAnimation/HomePageAnimations.css"
// import { Link } from "react-router-dom";
// const OrderSuccess = () => {
//     return (
//         <>
//             <div className="flex flex-col items-center justify-center w-full h-screen px-40 bg-white">
//                 <div className="flex items-end justify-end w-full">
//                 <Link to='/'>
//                     <button className=" text-[32px] bg-green-500  rounded-[50px] p-2">
//                         <MdHome className="text-white" />
//                     </button>
//                 </Link>
//                 </div>
//                 <div className="mt-6">
//                     <lord-icon
//                         src="https://cdn.lordicon.com/hsrrkevt.json"
//                         trigger="loop"
//                         colors="primary:#ebe6ef,secondary:#3a3347,tertiary:#30e849,quaternary:#646e78 animate-slideInLeft"
//                         style={{ width: '250px', height: '250px' }}>
//                     </lord-icon>
//                 </div>
//                 <div className="flex flex-col items-center justify-center mt-10">
//                     <h1 className="text-[35px] font-extrabold">
//                         Your Order has been placed !!
//                     </h1>
//                     <p className="mt-2 text-gray-600 text-[20px]">
//                         sit back and relax as your
//                     </p>
//                     <p className="mt-2 text-gray-600 text-[20px] w-[70%] text-center">
//                         Healthy grocery will be delivered to your doorsteps very soon
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default OrderSuccess

import { MdHome } from "react-icons/md";
import "../CssAnimation/HomePageAnimations.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-white sm:px-10 md:px-20 lg:px-40">
                <div className="flex items-end justify-end w-full">
                    <Link to="/">
                        <button className="text-[20px] sm:text-[24px] md:text-[32px] bg-green-500 rounded-full p-2 md:p-3">
                            <MdHome className="text-white" />
                        </button>
                    </Link>
                </div>
                <div className="mt-14 md:mt-6 ">
                    <lord-icon
                        src="https://cdn.lordicon.com/hsrrkevt.json"
                        trigger="loop"
                        colors="primary:#ebe6ef,secondary:#3a3347,tertiary:#30e849,quaternary:#646e78 animate-slideInLeft"
                        style={{ width: '150px', height: '150px' }}
                        className="sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="text-[24px] sm:text-[28px] md:text-[35px] font-extrabold text-center">
                        Your Order has been placed !!
                    </h1>
                    <p className="mt-2 text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] text-center">
                        Sit back and relax as your
                    </p>
                    <p className="mt-2 text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-[80%] md:w-[70%] text-center">
                        Healthy grocery will be delivered to your doorsteps very soon.
                    </p>
                </div>
            </div>
        </>
    );
};

export default OrderSuccess;
