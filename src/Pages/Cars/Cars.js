import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from '../CarCard/CarCard';

const Cars = () => {
    const cars = useLoaderData()
    const [bookingInfo, setBookingInfo] = useState('')
    return (
        <div className='max-w-[1440px] mx-auto px-2'>
            <div>
            {
                cars.map(car => <CarCard key={car._id} car={car} setBookingInfo={setBookingInfo}></CarCard>)
            }
            </div>
            <div>
               {
                bookingInfo &&  
                <BookingModal
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
                ></BookingModal>
               }
            </div>
        </div>
    );
};

export default Cars;