
import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

import useSeller from '../Hooks/useSeller';
import useUser from '../Hooks/useUser';
import Header from '../Pages/Shared/Header/Header';
import './DashboardLayout.css'
import { FaUserAlt } from "react-icons/fa";
const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const [ isUser, isUserLoading] = useUser(user?.email)
    const dashboardMenu = <>

      
        
      <div className='w-full flex justify-center'>
      <div>
      <div className='w-28 h-28 rounded-full border-2 mx-auto'>
      {
        user?.photoURL ?  <img className='w-full h-full rounded-full' src={user.photoURL} alt=''></img> : <img className='w-full h-full rounded-full' src='https://i.ibb.co/236zsTj/profile.jpg' alt=''></img>
       }
      </div>
        <p className='text-xl text-center text-white pt-3'>{user?.displayName}</p>
        <p className='text-lg text-center text-white pb-5'>{user?.email}</p>
      </div>
    </div>
      
      <button className='btn border-none text-lg bg-teal-800 hover:bg-teal-800 w-full h-auto rounded-none mb-5 text-white'><Link to='/'>Back to Home</Link></button>
      {
        isUser &&  <>
          <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/myOrders'}>My Orders</NavLink></li>
          <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/myWishes'}>My Wishes</NavLink></li>
        </>
      }
       
        {
          isSeller && 
       <>
         <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/myProducts'}>My Products</NavLink></li>
          <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/addProduct'}>Add Products</NavLink></li>
          
       </>
        }
      {
        isAdmin &&
         <>
         <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/allSellers'}>All Sellers</NavLink></li>
          <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/allBuyers'}>My Buyers</NavLink></li>
          <li className='das-menu-item'><NavLink className={({isActive})=> isActive ? 'active-btn rounded-none' : 'rounded-none'} to={'/dashboard/addBrand'}>Add Brand</NavLink></li>
         
         </>
      }
   <label htmlFor="dashboard" className="btn border-none text-lg bg-teal-800 hover:bg-teal-800 w-full h-auto rounded-none mb-5 text-white mt-11 drawer-button lg:hidden">Close drawer</label>
    </>

    if(isAdminLoading || isSellerLoading) {
      return <Loading></Loading>
    }
    return (
        <div>
            {/* <Header></Header> */}
            <div className="drawer h-vh-full drawer-mobile">
  <input id="dashboard" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col pt-4 px-4 md:px-20 pb-36">
   
    <Outlet></Outlet>
    <label htmlFor="dashboard" className="btn border-none text-lg bg-teal-800 hover:bg-teal-800 w-full h-auto rounded-none mb-5 text-white mt-7 drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side">
    
    <label htmlFor="dashboard" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 md:w-80 bg-[#1E1E1E] text-base-content">
     {
      dashboardMenu
     }
    </ul>
    
  
  </div>
  
</div>
        </div>
    );
};

export default DashboardLayout;