import PopularList from "./PopularList"

const Popular = () => {
    return (
        <>
            <div className='flex flex-col items-start justify-start w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 my-6 sm:my-8'>
                <h1 className='text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6'>
                    Popular
                </h1>
                <PopularList/>
            </div>
        </>
    )
}

export default Popular

