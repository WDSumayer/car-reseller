import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cars = () => {
    const cars = useLoaderData()
    return (
        <div>
            {
                cars.map(car => <p className='text-4xl'>{car.name} {car.brand_name}</p>)
            }
        </div>
    );
};

export default Cars;