import DashboardLayout from "../../layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import Cars from "../../Pages/Cars/Cars";
import AddBrand from "../../Pages/Dashboard/AddBrand/AddBrand";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashborad from "../../Pages/Dashboard/Dashborad";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishes from "../../Pages/Dashboard/MyWishes/MyWishes";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminPrivateRoute from "../PrivateRoutes/AdminPrivateRoute";
import BuyerPrivateRoute from "../PrivateRoutes/BuyerPrivateRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerPrivateRoute from "../PrivateRoutes/SellerPrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: LogIn } = require("../../Pages/LogIn/LogIn");
const { default: SignUp } = require("../../Pages/SignUp/SignUp");

const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/cars/brand/:id', 
                loader: ({params}) => fetch(`https://car-reseller-server-wdsumayer.vercel.app/cars/brand/${params.id}`),
                element: <PrivateRoutes><Cars></Cars></PrivateRoutes>
            },
            {
                path: '/blog', element: <Blog></Blog>
            }
            
        ]
    },
    // {
    //     path: '/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
    //         {
    //             path: '/dashboard', element: <Dashborad></Dashborad>
    //         },
    //         {
    //             path: '/dashboard/myOrders', element: <MyOrders></MyOrders>
    //         }
    //     ]
    // },
    {
        path:'/dashboard', element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>, children: [
            {
                path: '/dashboard', element: <Dashborad></Dashborad>
            },
            {
                path: '/dashboard/myOrders', element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myWishes', element: <MyWishes></MyWishes>
            },
            {
                path: '/dashboard/myOrders/payment/:id', element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://car-reseller-server-wdsumayer.vercel.app/orders/${params.id}`)
            },
            {
                path: '/dashboard/addProduct', element: <SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path: '/dashboard/myProducts', element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
            },
            {
                path: '/dashboard/allSellers', element: <AdminPrivateRoute><AllSellers></AllSellers></AdminPrivateRoute>
            },
            {
                path: '/dashboard/allBuyers', element: <AdminPrivateRoute><AllBuyers></AllBuyers></AdminPrivateRoute>
            },
            {
                path: '/dashboard/addBrand', element: <AdminPrivateRoute><AddBrand></AddBrand></AdminPrivateRoute>
            }
        ]
    },
    {
        path: '*', element: <ErrorPage></ErrorPage>
    }
])
export default routes;