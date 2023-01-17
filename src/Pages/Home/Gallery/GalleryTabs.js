import React, { useEffect } from 'react';
import { useState } from 'react';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';
import GalleryContent from './GalleryContent';
import './GalleryTabs.css'



const GalleryTabs = () => {

  const [brands, setBrands] = useState([])
  useEffect(() => {
      fetch(`https://car-reseller-server-wdsumayer.vercel.app/categories`)
      .then(res => res.json())
      .then(data => {
          setBrands(data)
      })
  }, [])  


    const [brand, setBrand] = useState('All')
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const btns = <>
      <button className={count === 0 ? 'tab-btn active-btn' : 'tab-btn'} onClick={() => {
        setBrand('All')
        setCount(0)
        setLoading(true)
      }}>All</button>
        {
             
             
                brands.map((brand,i) => <button className={count === i+1 ? 'tab-btn active-btn uppercase' : 'tab-btn uppercase'} onClick={() => {
                  setBrand(brand)
                  setCount(i + 1)
                  setLoading(true)
                }}>{brand.brand_name}</button>)
               
        }
    </>
    return (
        <div>
          <div className='w-full flex flex-wrap lg:flex-nowrap justify-center'>
            {
              btns
            }
          </div>
          <div className='w-full'>

          <GalleryContent count={count} brand={brand} setLoading={setLoading} loading={loading}></GalleryContent>
          </div>
        </div>
          
        
    );
};

export default GalleryTabs;