import PopularList from "./PopularList"

const Popular = () => {
    return (
        <>
            <div className='flex flex-col items-start justify-start w-[80%]'>
                <h1 className='text-black font-bold text-[30px]'>
                    Popular
                </h1>
                <PopularList/>
                

            </div>
        </>
    )
}

export default Popular

