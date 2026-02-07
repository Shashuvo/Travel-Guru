import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
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

