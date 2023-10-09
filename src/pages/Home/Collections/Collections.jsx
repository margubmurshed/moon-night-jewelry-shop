import React from 'react';
import ringImage from '../../../assets/home/wlr20-04025.png'

const Collections = () => {
    const items = [{id:1, name:"Diamond Ring", image: ringImage, price: 50250, code: 'moon01-0001'}, 
    {id:1, name:"Diamond Ring 1", image: ringImage, price: 50250, code: 'moon01-0001'},
    {id:2, name:"Diamond Ring 2", image: ringImage, price: 51250, code: 'moon01-0002'},
    {id:3, name:"Diamond Ring 3", image: ringImage, price: 52250, code: 'moon01-0003'},
    {id:4, name:"Diamond Ring 4", image: ringImage, price: 53250, code: 'moon01-0004'},
    {id:5, name:"Diamond Ring 5", image: ringImage, price: 54250, code: 'moon01-0005'},
    {id:6, name:"Diamond Ring 6", image: ringImage, price: 55250, code: 'moon01-0006'},
    {id:7, name:"Diamond Ring 7", image: ringImage, price: 56250, code: 'moon01-0007'},
    {id:8, name:"Diamond Ring 8", image: ringImage, price: 57250, code: 'moon01-0008'},
    {id:9, name:"Diamond Ring 9", image: ringImage, price: 58250, code: 'moon01-0009'},
    {id:10, name:"Diamond Ring 10", image: ringImage, price: 60250, code: 'moon01-0010'}]
    return (
        <div className='container mx-auto p-5'>
            <h2 className='text-center text-5xl font-["olivera"] mb-5'>Top Collections</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {items.map(item => (
                    <div className=''>
                        <div className='bg-gray-100 p-5'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="mt-3 uppercase">
                            <p className='font-semibold uppercase text-lg'>{item.name}</p>
                            <p className='font-thin text-md'>{item.code}</p>
                            <p className='flex items-center font-semibold'>{item.price} TAKA</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;