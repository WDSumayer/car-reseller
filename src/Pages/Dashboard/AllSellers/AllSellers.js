import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './AllSellers.css'

const AllSellers = () => {
    const { logOut } = useContext(AuthContext)
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {

            const res = await fetch('https://car-reseller-server-wdsumayer.vercel.app/users/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Car-resel-Token')}`
                }
            })
            const data = await res.json()
            if (res.status === 401 || res.status === 403) {
                return logOut()
            }
            return data



        }

    })

    const handleVerify = (id) => {
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/users/status/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    const handleDeleteSeller = (id) => {
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('seller deleted successfully')

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full mt-9'>
            <h1 className='text-3xl text-teal-900 font-bold mb-5'>Your Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table seller-table w-full">

                    <thead>
                        <tr className='bg-teal-700 text-white'>
                            <th className='bg-teal-700 text-white'></th>
                            <th className='bg-teal-700 text-white'>Name</th>
                            <th className='bg-teal-700 text-white'>Email</th>
                            <th className='bg-teal-700 text-white'>Status</th>
                            <th className='bg-teal-700 text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr className={sellers.indexOf(seller) % 2 !== 0 ? "active" : 'undefined'} key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.status === 'Verified' ?
                                    <span className='text-green-600 font-semibold'>Verified</span>
                                    :
                                    <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-accent'>verify</button>
                                }</td>
                                <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm rounded-sm btn-error text-white'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;