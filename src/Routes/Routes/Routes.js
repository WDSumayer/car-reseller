import DashboardLayout from "../../layout/DashboardLayout";
import Cars from "../../Pages/Cars/Cars";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AdminPrivateRoute from "../PrivateRoutes/AdminPrivateRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerPrivateRoute from "../PrivateRoutes/SellerPrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: LogIn } = require("../../Pages/LogIn/LogIn");
const { default: SignUp } = require("../../Pages/SignUp/SignUp");

const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
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
                path: '/cars/brand/:id', element: <PrivateRoutes><Cars></Cars></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/brand/${params.id}`)
            }
        ]
    },
    {
        path:'/myOrders', element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>, children: [
            {
                path: '/myOrders', element: <MyOrders></MyOrders>
            },
            {
                path: '/myOrders/addProduct', element: <SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path: '/myOrders/myProducts', element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
            },
            {
                path: '/myOrders/allSellers', element: <AdminPrivateRoute><AllSellers></AllSellers></AdminPrivateRoute>
            },
            {
                path: '/myOrders/allBuyers', element: <AdminPrivateRoute><AllBuyers></AllBuyers></AdminPrivateRoute>
            }
        ]
    }
])
export default routes;