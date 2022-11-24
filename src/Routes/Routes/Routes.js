import DashboardLayout from "../../layout/DashboardLayout";
import Cars from "../../Pages/Cars/Cars";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";

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
                path: '/cars/brand/:id', element: <Cars></Cars>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/brand/${params.id}`)
            }
        ]
    },
    {
        path:'/myOrders', element: <DashboardLayout></DashboardLayout>, children: [
            {
                path: '/myOrders', element: <MyOrders></MyOrders>
            }
        ]
    }
])
export default routes;