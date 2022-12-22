import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GalleryTabs from './GalleryTabs';

const Gallery = () => {


  
    return (
        <div className='py-5 lg:py-36'>
          <div>
            <h1 className='text-center text-3xl lg:text-5xl font-bold mb-14'>Gallery</h1>
          </div>

      <GalleryTabs></GalleryTabs>



        </div>
    );
};

export default Gallery;