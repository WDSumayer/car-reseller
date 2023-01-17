import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BookingModal from '../../BookingModal/BookingModal';
import WishBookingModal from '../../WishBookingModal/WishBookingModal';
import MyWishCard from './MyWishCard';

const MyWishes = () => {
    const {user, logOut} = useContext(AuthContext)
    const [bookingInfo, setBookingInfo] = useState(null)
    const {data:wishes = [], isLoading, refetch} = useQuery({ 
        queryKey: ['wishes', user?.email], 
        queryFn: async () => {
          
            const res = await fetch(`https://car-reseller-server-wdsumayer.vercel.app/wishes?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Car-resel-Token')}`
                }
            })
            const data = await res.json()
            if(res.status === 401 || res.status === 403){
                return logOut()
              }
            return data
            
         
        
        }
       
    })
if(isLoading){
    return <Loading></Loading>
}

    return (
        <div className='w-full'>
         <div className='px-2 py-9 md:px-7'>
        {
            wishes.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9'>
            {
                wishes.map(wish => <MyWishCard key={wish._id} wish={wish} setBookingInfo={setBookingInfo}></MyWishCard>)
            }
                
            
            
        </div>
        :
        <h1 className='text-center text-4xl pt-5'>You have no wishes here......</h1>
        }
         {  bookingInfo &&
                 <WishBookingModal
                 bookingInfo={bookingInfo}
                 setBookingInfo={setBookingInfo}
                 refetch={refetch}
                 ></WishBookingModal>
             }
       </div>
      </div>
    );
};

export default MyWishes;