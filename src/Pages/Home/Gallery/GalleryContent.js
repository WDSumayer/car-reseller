import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './GalleryConten.css'

const GalleryContent = ({brand, count}) => {

    const [items, setItems] = useState([])
  

    useEffect(() => {
        fetch('https://car-reseller-server-wdsumayer.vercel.app/galleryItems')
        .then(res => res.json())
        .then(data => {
            if(brand === 'All'){
                setItems(data)
            }
            else{
                const selectedItems = data.filter(d => d.brand === brand.brand_name)
                setItems(selectedItems)
            }
        })

    }, [brand])


    


    return (
       <div className='pt-14 display-control'>
        {
            items.length ? 
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
           
            {
                 items.map(selectedItem => <img src={selectedItem.img} className='w-full rounded-lg' alt=''></img>)
             }
            
         </div>
         :
         <h1 className='text-3xl text-center'>No gallery item available.</h1>
        }
       </div>
    );
};

export default GalleryContent;