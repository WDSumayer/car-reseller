import React from 'react';
import { useState } from 'react';
import SmallLoading from '../../../../components/SmallLoading/SmallLoading';
import './CategoriesCard.css'

const CategoriesCard = ({category}) => {
    const {img, brand_name} = category
    const [loading, setLoading] = useState(false)
    
    return (
        <div onClick={() => setLoading(true)} className='brand-name rounded-2xl'>
            <div className='brand-overlay'><p className='text-lg lg:text-xl xl:text-4xl'>
                {
                    loading ? <><SmallLoading></SmallLoading><span className='text-lg ml-3'>working...</span></> : brand_name
                }
                </p></div>
            <img src={img} alt=''></img>
        </div>
    );
};

export default CategoriesCard;