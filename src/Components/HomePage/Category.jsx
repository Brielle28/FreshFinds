import React from 'react';

// Reusable Carousel Item Component
const CarouselItem = ({ imageUrl, categoryName }) => {
    return (
        <div className="carousel-item inline-block flex-col justify-start text-center items-center gap-7 bg-[#d7f3d0] px-4 rounded-t-[200px] pb-7">
            <div className='p-8 bg-white rounded-full mt-5 mb-10'>
                <div
                    className="w-28 h-28 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </div>
            <h1 className='text-blue-950 font-bold text-[`15px]'>
                {categoryName}
            </h1>
        </div>
    );
};

const Category = () => {
    // Example data for the categories (can be dynamic)
    const categories = [
        { name: 'Fruits & Vegetables', imageUrl: '/orange.png' },
        { name: 'Meat & Seafood', imageUrl: '/orange.png' },
        { name: 'Dairy Products', imageUrl: '/orange.png' },
        { name: 'Bakery Items', imageUrl: '/orange.png' },
        { name: 'Beverages', imageUrl: '/orange.png' },
        { name: 'Frozen Foods', imageUrl: '/orange.png' },
        { name: 'Household Essentials', imageUrl: '/orange.png' },
        { name: 'Organic & Health Foods', imageUrl: '/orange.png' },


    ];

    return (
        <div className='flex flex-col items-start justify-start w-[80%] my-8'>
            <h1 className='text-black font-bold text-[30px]'>Category</h1>
            <div className="carousel rounded-box gap-8 w-full my-10 overflow-x-scroll whitespace-nowrap scroll-smooth scroll-snap-x">
                {/* Mapping through categories to generate carousel items */}
                {categories.map((category, index) => (
                    <CarouselItem 
                        key={index}
                        imageUrl={category.imageUrl}
                        categoryName={category.name} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;


// Fruits & Vegetables
// Dairy & Eggs
// Meat & Seafood
// Bakery & Snacks
// Beverages
// Frozen Foods
// Household Essentials
// Organic & Health Foods

 {/* <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                            alt="Burger" />
                    </div> */}