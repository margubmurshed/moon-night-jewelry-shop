import React from 'react';
import photo1 from '../../assets/home/1.jpg'

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-center relative'>
            <p className='hidden md:block font-["olivera"] text-8xl absolute rotate-90 right-0 top-1/2 -translate-y-1/2 opacity-10'>MOON</p>
            <div>
                <img src={photo1} alt="photo1" className='w-full h-[75vh] lg:h-screen object-cover'/>
            </div>
            <div className='font-["olivera"] text-5xl lg:text-8xl lg:-ml-5 -mt-36 lg:mt-0 lg:translate-y-1/4 p-5 lg:p-0'>
                <p>embellishment</p>
                <p className='text-right bg-gray-800 text-white'>elegance</p>
                <p>majestic</p>
                <p className='text-right bg-gray-800 text-white'>graceful</p>
            </div>
        </div>
    );
};

export default Home;