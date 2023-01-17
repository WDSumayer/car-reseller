import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Loading from '../../../components/Loading/Loading';
import './GalleryConten.css'
import { FaEye } from "react-icons/fa";

const GalleryContent = ({ brand, count, loading, setLoading }) => {

    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('https://car-reseller-server-wdsumayer.vercel.app/galleryItems')
            .then(res => res.json())
            .then(data => {
                if (brand === 'All') {
                    setItems(data)
                    setLoading(false)
                }
                else {
                    const selectedItems = data.filter(d => d.brand === brand.brand_name)
                    setItems(selectedItems)
                    setLoading(false)
                }
            })

    }, [brand, setLoading])





    return (
        <PhotoProvider>
            <div className='pt-14 display-control'>
                {
                    loading ? <div className='flex justify-center items-center w-full h-[250px]'> <Loading></Loading></div>
                        :
                        <div>
                            {
                                items.length ?
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>

                                        {
                                            items.map(selectedItem => <PhotoView src={selectedItem.img}>
                                                <div className='gallery-img'>
                                                    <img src={selectedItem.img} className='w-full rounded-lg' alt=''></img>
                                                    <div className='gallery-img-overlay'></div>
                                                    <FaEye className='zoom-eye text-white text-3xl z-[2]'></FaEye>
                                                </div>
                                            </PhotoView>)
                                        }

                                    </div>
                                    :
                                    <div className='flex justify-center items-center w-full h-[250px]'>  <h1 className='text-3xl text-center'>No gallery item available.</h1></div>
                                   
                            }
                        </div>
                }
            </div>
        </PhotoProvider>
    );
};

export default GalleryContent;