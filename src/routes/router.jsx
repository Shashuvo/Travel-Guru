import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => {
                    await new Promise(resolve => setTimeout(resolve, 250));
                    const res = await fetch('/places.json');
                    return res.json();
                },
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            }
        ]
    },
    {
        path: "/*",
        element: <h1>ERROR 404</h1>
    }
]);

