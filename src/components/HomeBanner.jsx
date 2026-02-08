import React from 'react';
import BannerRight from './BannerRight';
import { FaArrowRightLong } from "react-icons/fa6";

const HomeBanner = ({ place, places, setSelectedPlaces }) => {
    const { title, details } = place;
    return (
        <div className='flex w-full items-center justify-between gap-11'>
            {/* left Banner */}
            <div className='w-1/2 flex flex-col gap-7'>
                <h1 className='title text-4xl md:text-8xl'>{title}</h1>
                <p className='line-clamp-3'>{details}</p>
                <button className="btn btn-primary w-1/3 text-black hover:bg-white">Booking <FaArrowRightLong /></button>
            </div>
            {/* right Banner */}
            <BannerRight places={places} selectedPlace={place} setSelectedPlaces={setSelectedPlaces}></BannerRight>
        </div>
    );
};

export default HomeBanner;