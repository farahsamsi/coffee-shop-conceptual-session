import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]

    },
]);

export default routes;