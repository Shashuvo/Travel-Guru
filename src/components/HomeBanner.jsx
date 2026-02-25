import React from 'react';
import BannerRight from './BannerRight';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router';

const HomeBanner = ({ place, places, setSelectedPlace }) => {
    const { id, title, details } = place;
    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-between md:gap-11 text-white'>
            {/* left Banner */}
            <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-7'>
                <h1 className='title text-5xl md:text-7xl'>{title}</h1>
                <p className='line-clamp-3'>{details}</p>
                <NavLink to={`/destination/${id}`} className="btn btn-primary w-1/3 text-black hover:bg-white">Booking <FaArrowRightLong /></NavLink>
            </div>
            {/* right Banner */}
            <BannerRight places={places} selectedPlace={place} setSelectedPlace={setSelectedPlace}></BannerRight>
        </div>
    );
};

export default HomeBanner;