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
        <div className="flex flex-col items-center w-[90%] md:mt-[190px] mt-32">
            <div className="relative w-full mt-16 overflow-hidden sm:w-4/5 rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse md:flex-row items-center justify-center min-w-full px-5 sm:px-10 bg-[#d7f3d0]"
                        >
                            <div className="flex flex-col items-center justify-center w-full mb-3 md:items-start sm:w-1/2">
                                <h6 className="w-full font-bold leading-7 text-center md:text-3xl sm:w-4/5 sm:text-4xl sm:leading-10 text-blue-950 md:text-left">
                                    {slide.title}
                                </h6>
                                <div className="px-3 mt-2 md:mt-5 font-semibold border-0 transition-colors btn text-black hover:text-white bg-white hover:bg-[#6ddb51]">
                                    Order Now
                                </div>
                            </div>
                            <div
                                className="w-40 h-40 mb-5 bg-center bg-no-repeat bg-contain sm:w-52 sm:h-52 lg:w-64 lg:h-64 sm:mb-0 animate-zoomAndDance"
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 py-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`btn btn-xs border-0 ${activeIndex === index ? 'bg-[#6ddb51] text-white' : 'bg-white text-black'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;