import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},{
    path: "/sign-in",
    element: <SignIn />,
},{
    path: "/sign-up",
    element: <SignUp />,
}
]);

const AppRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}
export default AppRoutes;