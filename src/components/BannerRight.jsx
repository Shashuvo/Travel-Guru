import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { images } from '../assets/images';


const BannerRight = ({ places, selectedPlace, setSelectedPlace }) => {
    const scrollRef = useRef();
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -200,
            behavior: "smooth"
        });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 200,
            behavior: "smooth"
        });
    };
    return (
        <div className='relative w-190'>
            {/* cards */}
            <div className='flex gap-7 overflow-x-auto scrollbar-hide mt-36' ref={scrollRef}>
                {
                    places.map((place, index) => (
                        <div key={place.id + "-" + index} onClick={() => setSelectedPlace(place)}
                            className={`min-w-70 h-96 rounded-xl overflow-hidden cursor-pointer relative border-4 transition-all duration-300
                            before:absolute before:inset-0 before:bg-linear-to-t before:from-black/90 before:via-black/20 before:to-transparent before:z-10
                            ${selectedPlace.id === place.id ? "border-primary" : "border-transparent"}`}>
                            <img src={images[place.id]} alt="Place Image" className='w-full h-full object-cover' />
                            <h1 className='absolute bottom-8 left-4 text-white title text-4xl z-20'>{place.title}</h1>
                        </div>
                    ))
                }
            </div>
            {/* buttons */}
            <div className='flex gap-4 mt-6'>
                <MdOutlineKeyboardArrowLeft onClick={scrollLeft} className='w-10 h-10 bg-white rounded-full text-black' />
                <MdOutlineKeyboardArrowRight onClick={scrollRight} className='w-10 h-10 bg-white rounded-full text-black' />
            </div>
        </div>
    );
};

export default BannerRight;