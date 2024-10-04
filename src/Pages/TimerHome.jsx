// SplashScreen.jsx (Homepage Component)
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CssAnimation/HomePageAnimations.css"
const TimerHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set the timeout to navigate to the next page after 3 seconds (3000ms)
    const timer = setTimeout(() => {
      navigate('/HomePage'); // Replace '/main' with your next page route
    }, 4000);

    // Clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#d7f3d0] ">
      <div
        className="w-48 h-48 sm:w-64 sm:h-64 bg-center bg-no-repeat bg-contain border-red-600 animate-zoomAndDance"
        style={{ backgroundImage: "url('/fruity.png')" }}
      ></div>

      <p className="text-[28px] sm:text-[35px] lg:text-[45px] text-black font-semibold mt-4 sm:mt-6 animate-slideInLeft">
        Find Your Daily
      </p>
      <p className="text-[28px] sm:text-[35px] lg:text-[45px] text-black font-semibold leading-8 sm:leading-9 lg:leading-10 animate-slideInRight">
        Groceries Products
      </p>

      <div className="flex flex-col items-center justify-center mt-8 sm:mt-10 px-3 sm:px-0 text-center">
        <p className="text-gray-400 text-[12px] sm:text-[14px] lg:text-[16px] animate-slideInUp">
          Florem ipsum is simply a dummy text of the
        </p>
        <p className="text-gray-400 text-[12px] sm:text-[14px] lg:text-[16px] animate-slideInUp">
          printing and typesetting industry
        </p>
      </div>
    </div>
    // <div className="w-full h-screen flex flex-col items-center justify-center bg-[#019934] ">
    //   <div
    //     className="w-40 h-40 sm:w-64 sm:h-64 bg-center bg-no-repeat bg-contain animate-slideInBounce"
    //     style={{ backgroundImage: "url('/fruit1.png')" }}
    //   ></div>

    //   <p className="text-[28px] sm:text-[35px] lg:text-[45px] text-white font-semibold mt-4 sm:mt-6 animate-slideInUp">
    //     Fresh Find
    //   </p>
    // </div>
  );
};

export default TimerHome;
