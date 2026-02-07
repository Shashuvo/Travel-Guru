import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 w-full z-50">
                <nav className="w-full md:w-10/12 mx-auto mt-2 md:mt-5">
                    <Navbar />
                </nav>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;