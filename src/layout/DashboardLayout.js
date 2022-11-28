
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const dashboardMenu = <>
       <li className='lg:bg-gray-100 mr-3'><Link to='/myOrders'>My Orders</Link></li>
       
        {
          isSeller && 
       <>
           <li className='lg:bg-gray-100 mr-3'><Link to='/myOrders/myProducts'>My Products</Link></li>
        <li className='lg:bg-gray-100 mr-3'><Link to='/myOrders/addProduct'>Add A Products</Link></li>
       </>
        }
      {
        isAdmin &&
         <>
         <li className='lg:bg-gray-100 mr-3'><Link to='/myOrders/allSellers'>All Sellers</Link></li>
          <li className='lg:bg-gray-100 mr-3'><Link to='/myOrders/allBuyers'>All Buyers</Link></li>
         </>
      }

    </>

    if(isAdminLoading || isSellerLoading) {
      return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className="drawer max-w-[1440px] mx-auto py-24 px-2 h-auto">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col px-3">
  
    <div className="w-full navbar flex justify-center mb-14">
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          
         {
            dashboardMenu
         }
        </ul>
      </div>
    </div>
    
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 mr-8 bg-white">
     
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