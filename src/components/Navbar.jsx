import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { BiSearch } from 'react-icons/bi';


const Navbar = ({ theme, showSearch }) => {
    const { setUser, user, logOut } = use(AuthContext);
    const isDark = theme === "dark";
    const textColor = isDark ? "text-white" : "text-black";
    const justify = showSearch ? "justify-start" : "justify-between";
    const dropDownBg = isDark ? "bg-black/80" : "bg-white/80";
    console.log(user);

    const handleLogout = () => {
        logOut().then(() => {
            setUser(null);
            alert("logged out successfully")
        }).catch((error) => {
            console.log(error);
        });
    }

    const links = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className={`navbar ${textColor} bg-transparent px-4 md:px-0 ${justify}`}>
            {/* Left Navbar */}
            <div className="navbar-start flex-none lg:flex-[0_0_12.5%] flex items-center gap-2">
                {/* mobile menu */}
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className={`menu menu-sm dropdown-content ${dropDownBg} ${textColor} rounded-box z-10 mt-3 w-52 p-2 shadow`}>
                        {links}
                    </ul>
                </div>
                {/* logo */}
                <img src="/logo.png" alt="Logo Image" className={isDark ? 'filter invert brightness-0 h-15' : 'h-15'} />
            </div>
            {/* center Navbar */}
            {showSearch && (
                <div className='navbar-center relative hidden md:flex flex-none lg:flex-[0_0_33.33%] justify-center'>
                    {/* search */}
                    <label className="input border-2 border-white bg-transparent">
                        <BiSearch></BiSearch>
                        <input type="search" required placeholder="Search your Destination..." className='text-white placeholder-white border-white w-full' />
                    </label>
                </div>
            )}
            {/* end navbar */}
            <div className="navbar-end flex-none lg:flex-[0_0_50%] flex justify-end items-center gap-12">
                {/* menu list */}
                <ul className={`menu menu-horizontal px-1 ${textColor} gap-12 hidden lg:flex`}>
                    {links}
                </ul>
                {/* button */}
                {
                    user ? <button onClick={handleLogout} className="btn btn-primary text-black border-none px-6 hover:bg-primary/80">Logout</button> : <NavLink to="/auth/login" className="btn btn-primary text-black border-none px-6 hover:bg-primary/80">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;