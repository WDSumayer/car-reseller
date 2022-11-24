import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const dashboardMenu = <>
        <li><Link to='/myOrders'>My Orders</Link></li>
        <li><Link to='/two'>itemtwo</Link></li>
    </>
    return (
        <div>
            <Header></Header>
            <div className="drawer">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
  
    <div className="w-full navbar">
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