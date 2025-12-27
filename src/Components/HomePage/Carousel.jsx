import { useState, useEffect } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalSlides);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const slides = [
        {
            title: "Get 40% discount on your first order from the App",
            image: "/basket2.png"
        },
        {
            title: "Fresh Produce Groceries Delivered to Your Doorstep",
            image: "/splash1.png"
        },
        {
            title: "Organic Vegetables Just For You, A Healthier Choice for You and the Planet",
            image: "/organic2.png"
        },
        {
            title: "Fresh Citrus!!, A Burst of Freshness and Nutrition, known for their refreshing flavors",
            image: "/orange.png"
        }
    ];

    return (
        <div className="flex flex-col items-center w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 md:mt-[180px] lg:mt-[190px] mt-28 sm:mt-32">
            <div className="relative w-full mt-8 sm:mt-12 md:mt-16 overflow-hidden rounded-xl sm:rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse md:flex-row items-center justify-center min-w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 bg-[#d7f3d0]"
                        >
                            <div className="flex flex-col items-center justify-center w-full mb-3 sm:mb-4 md:mb-0 md:items-start md:w-1/2 md:pr-4">
                                <h6 className="w-full font-bold leading-tight sm:leading-6 md:leading-7 lg:leading-8 text-center text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-950 md:text-left">
                                    {slide.title}
                                </h6>
                                <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base font-semibold border-0 transition-colors rounded-lg text-black hover:text-white bg-white hover:bg-[#6ddb51]">
                                    Order Now
                                </button>
                            </div>
                            <div
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-3 sm:mb-4 md:mb-0 bg-center bg-no-repeat bg-contain animate-zoomAndDance"
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-1.5 sm:gap-2 py-3 sm:py-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`btn btn-xs sm:btn-sm border-0 text-xs sm:text-sm ${activeIndex === index ? 'bg-[#6ddb51] text-white' : 'bg-white text-black'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;