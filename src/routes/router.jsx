import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
    {
        path: "/auth",
        Component: AuthLayout,
    },
    {
        path: "/*",
        element: <h1>ERROR 404</h1>
    }
]);

