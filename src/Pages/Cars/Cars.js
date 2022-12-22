import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import useTitle from '../../Hooks/useTitle';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from './CarCard'

const Cars = () => {
    const cars = useLoaderData()

    const [bookingInfo, setBookingInfo] = useState(null)
    const navigation = useNavigation()
    useTitle('cars')

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    const availableCars = cars.filter(car => car.status !== "Paid")
    
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='max-w-[1440px] mx-auto px-2'>
           {
            availableCars.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-24'>
            {
                availableCars.map(car => <CarCard key={car._id} car={car} setBookingInfo={setBookingInfo}></CarCard>)
            }
            </div>
            :
            <div className='h-screen flex items-center justify-center'><h1 className='text-5xl font-black text-center'>No car available of this brand</h1></div>
           }
            
             {  bookingInfo &&
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