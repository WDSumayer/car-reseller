
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

import useSeller from '../Hooks/useSeller';
import useUser from '../Hooks/useUser';
import Header from '../Pages/Shared/Header/Header';
import './DashboardLayout.css'
const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const [ isUser, isUserLoading] = useUser(user?.email)
    const dashboardMenu = <>
      {
        isUser &&  <li className='das-menu-item'><Link className='rounded-none' to='/dashboard/myOrders'>My Orders</Link></li>
      }
       
        {
          isSeller && 
       <>
           <li className='das-menu-item'><Link to='/dashboard/myProducts'>My Products</Link></li>
        <li className='das-menu-item'><Link to='/dashboard/addProduct'>Add A Products</Link></li>
       </>
        }
      {
        isAdmin &&
         <>
         <li className='das-menu-item'><Link to='/dashboard/allSellers'>All Sellers</Link></li>
          <li className='das-menu-item'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
         </>
      }

    </>

    if(isAdminLoading || isSellerLoading) {
      return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className="drawer h-auto drawer-mobile">
  <input id="dashboard" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center pt-4 px-4 pb-36">
   
    <Outlet></Outlet>
    <label htmlFor="dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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