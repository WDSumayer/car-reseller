import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from './CarCard'

const Cars = () => {
    const cars = useLoaderData()
    const navigation = useNavigation()
    const [bookingInfo, setBookingInfo] = useState(null)

    const availableCars = cars.filter(car => car.status !== "Paid")
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-[1440px] mx-auto px-2 py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {
                availableCars.map(car => <CarCard key={car._id} car={car} setBookingInfo={setBookingInfo}></CarCard>)
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