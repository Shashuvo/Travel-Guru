import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router';


const Navbar = () => {
    const links = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-transparent text-white px-4 md:px-0 justify-start">
            {/* Left Navbar */}
            <div className="navbar-start flex-none lg:flex-[0_0_12.5%] flex items-center gap-2">
                {/* mobile menu */}
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-black/80 text-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* logo */}
                <img src="/logo.png" alt="Logo Image" className='filter invert brightness-0 h-15' />
            </div>
            {/* center Navbar */}
            <div className='navbar-center relative hidden md:flex flex-none lg:flex-[0_0_33.33%] justify-center'>
                {/* search */}
                <span className='absolute left-3'><IoSearch /></span>
                <input type="text" placeholder="       Search your Destination..." className="input input- py-4 bg-transparent border-white text-white placeholder-white w-full" />
            </div>
            {/* end navbar */}
            <div className="navbar-end flex-none lg:flex-[0_0_50%] flex justify-end items-center gap-12">
                {/* menu list */}
                <ul className="menu menu-horizontal px-1 text-white gap-12 hidden lg:flex">
                    {links}
                </ul>
                {/* button */}
                <a className="btn btn-primary text-black border-none px-6 hover:bg-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;