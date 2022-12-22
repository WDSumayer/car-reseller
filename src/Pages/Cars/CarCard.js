import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCircle } from "react-icons/fa";
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast';
import useUser from '../../Hooks/useUser';


const CarCard = ({ car, setBookingInfo }) => {
  const { user } = useContext(AuthContext)
  const { img, name, condition, seller_name, brand_name, location, resale_price, original_price, years_of_use, posted_date, seller_email, _id, status: product_status } = car
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [isUser] = useUser(user?.email)

  const { data: status = [], isLoading } = useQuery({
    queryKey: ['status', seller_email],
    queryFn: async () => {

      const res = await fetch(`https://car-reseller-server-wdsumayer.vercel.app/user/status/${seller_email}`)
      const data = await res.json()

      return data



    }

  })

  const handleWishCar = () => {
    const wishedCar = {
       img, email: user.email, name, resale_price, product_status, car_id: _id, seller_email
    }


    fetch(`https://car-reseller-server-wdsumayer.vercel.app/wishes`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(wishedCar)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('wish added successfully')


        }
        else {
          alert(data.message)
        }
      })
  }




  return (

    <div className="card bg-white shadow-xl rounded-none">
      <div className="w-full h-80 p-5">
        <img src={img} alt="Shoes" className="w-full h-full object-fill" />


      </div>
      <div className="card-body block p-0">
        <h2 className="card-title text-3xl font-bold justify-center px-5 text-center">{name}</h2>
        <h2 className="card-title text-2xl text-stone-500 font-bold justify-center px-5 text-center">{brand_name}</h2>

        <div className='px-5 py-6'>
          <p className='text-lg font-bold flex justify-start'> <span>Seller's Name: {seller_name}</span> <span>{status?.status === "Verified" && <small className='text-green-600 border rounded-full border-green-600 px-2 font-medium ml-2'>verified</small>}</span></p>


          <p className='text-lg font-bold'>{years_of_use} <span className='font-light'>years used &</span> {condition} <span className='font-light'>condition.</span> </p>
          <div className='flex justify-start items-center'>
            <div><p className='text-lg mr-1 font-bold'>{location}</p></div>
            <FaMapMarkerAlt></FaMapMarkerAlt>
          </div>
          <p className='text-lg'>Posted in: {posted_date}</p>
        </div>
        <div className='bg-[#F2F2F2] flex justify-around px-5 py-2'>
          <div className='text-center'>
            <p className='text-xl font-semibold'>${original_price}</p>
            <small>Original Price</small>
          </div>
          <div className='text-center'>
            <p className='text-4xl font-black text-teal-800'>${resale_price}</p>
            <small>Resale Price</small>
          </div>
        </div>

        <div className="w-full flex justify-center py-5">
          {
            isUser &&
            <>
              <label onClick={() => setBookingInfo(car)} htmlFor="modalBooking" className="text-center text-white cursor-pointer w-3/5 bg-teal-800 rounded-none h-auto py-3">Book Now</label>
              <button onClick={handleWishCar} className="flex justify-center items-center text-2xl w-1/5 border border-slate-700 bg-white text-slate-700 rounded-none h-auto py-3 ml-1"><FaHeart></FaHeart></button>
            </>
          }

        </div>
      </div>
    </div>

  );
};

export default CarCard;