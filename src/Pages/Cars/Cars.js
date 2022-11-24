import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';

const Cars = () => {
    const cars = useLoaderData()
    return (
        <div className='max-w-[1440px] mx-auto px-2'>
            {
                cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
            }
        </div>
    );
};

export default Cars;