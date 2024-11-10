
const Carousel = () => {
    return (
        <>
            <div className="carousel w-[80%] mt-60 rounded-[20px]">
                {/* first item */}
                <div id="item1" className="flex flex-row items-center justify-center carousel-item w-full px-10 bg-[#d7f3d0]">
                    <div className='flex flex-col items-start justify-center w-[50%]'>
                        <h6 className='w-[70%] text-[38px] text-blue-950 font-bold leading-10'>
                            Get 40% discount on your first order from the App
                        </h6>
                        <button className="btn mt-5 px-10 text-black font-semibold hover:text-white hover:bg-[#6ddb51]"> Order Now </button>
                    </div>
                    <div
                        className="mr-10 bg-center bg-no-repeat bg-contain w-52 h-52 sm:w-64 sm:h-64 animate-zoomAndDance"
                        style={{ backgroundImage: "url('/basket2.png')" }}
                    ></div>
                </div>

                {/* second item */}
                <div id="item2" className="flex flex-row items-center justify-center carousel-item w-full px-10 bg-[#d7f3d0]">
                    <div className='flex flex-col items-start justify-center w-[50%]'>
                        <h6 className='w-[80%] text-[38px] text-blue-950 font-bold leading-10'>
                            Fresh Produce Groceries Delivered to Your Doorstep
                        </h6>
                        <button className="btn mt-5 px-10 text-black font-semibold hover:text-white hover:bg-[#6ddb51]"> shop Now </button>
                    </div>
                    <div
                        className="w-56 h-56 mr-20 bg-center bg-no-repeat bg-contain sm:w-64 sm:h-64 animate-zoomAndDance"
                        style={{ backgroundImage: "url('/fruitsplash.png')" }}
                    ></div>
                </div>

                {/* third item */}
                <div id="item3" className="flex flex-row items-center justify-center carousel-item w-full px-10 bg-[#d7f3d0]">
                    <div className='flex flex-col items-start justify-center w-[50%]'>
                        <h6 className='w-[70%] text-[38px] text-blue-950 font-bold leading-10'>
                            Organic Vegetables Just For You
                        </h6>
                        <button className="btn mt-5 px-10 text-[#6ddb51] font-semibold hover:text-white hover:bg-[#6ddb51]"> Order Now </button>
                    </div>
                    <div
                        className="mr-10 bg-center bg-no-repeat bg-contain w-52 h-52 sm:w-64 sm:h-64 animate-zoomAndDance"
                        style={{ backgroundImage: "url('/scatteredFruit.png')" }}
                    ></div>
                </div>
                {/* fourth item  */}
                <div id="item4" className="flex flex-row items-center justify-center carousel-item w-full px-10 bg-[#d7f3d0]">
                    <div className='flex flex-col items-start justify-center w-[50%]'>
                        <h6 className='w-[70%] text-[38px] text-blue-950 font-bold leading-10'>
                            Fresh Citrus Fruits at Your Fingertips
                        </h6>
                        <button className="btn mt-5 px-10 text-black font-semibold hover:text-white hover:bg-[#6ddb51]"> Order Now </button>
                    </div>
                    <div
                        className="mr-10 bg-center bg-no-repeat bg-contain w-52 h-52 sm:w-64 sm:h-64 animate-zoomAndDance"
                        style={{ backgroundImage: "url('/orange.png')" }}
                    ></div>
                </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    )
}

export default Carousel
