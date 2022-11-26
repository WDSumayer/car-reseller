import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from './CarCard'

const Cars = () => {
    const cars = useLoaderData()
    const [bookingInfo, setBookingInfo] = useState(null)
    return (
        <div className='max-w-[1440px] mx-auto px-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {
                cars.map(car => <CarCard key={car._id} car={car} setBookingInfo={setBookingInfo}></CarCard>)
            }
            </div>
            
             {  bookingInfo &&
                 <BookingModal
                 bookingInfo={bookingInfo}
                 setBookingInfo={setBookingInfo}
                 ></BookingModal>
             }
            
        </div>
    );
};

export default Cars;