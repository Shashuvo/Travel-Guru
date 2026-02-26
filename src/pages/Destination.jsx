import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { images } from '../assets/images';

const Destination = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [place, setPlace] = useState({})
    useEffect(() => {
        const singlePlace = data.find(singlePlace => singlePlace.id == id);
        setTimeout(() => {
            setPlace(singlePlace);
        }, 0)
    }, [data, id])
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-repeat-y bg-contain md:bg-cover md:bg-no-repeat bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[id]})` }}>
            <div className='flex flex-col md:flex-row w-11/12 md:w-10/12 mx-auto mt-40 md:mt-0 items-center justify-between gap-8 md:gap-60 text-white'>
                {/* left */}
                <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-7'>
                    <h1 className='title text-5xl md:text-7xl'>{place.title}</h1>
                    <p>{place.details}</p>
                </div>
                {/* right */}
                <div className='w-full md:w-1/2 md:mr-13'>
                    <fieldset className="fieldset bg-white border-base-300 rounded-box w-full border p-4">
                        <label className="label text-[#818181]">Origin</label>
                        <input type="text" className="input w-full bg-base-200 text-black font-bold placeholder:text-black" placeholder="Your Origin" />

                        <label className="label text-[#818181]">Destination</label>
                        <input type="text" className="input w-full bg-base-200 text-black font-bold placeholder:text-black" value={place.title} />
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className="label text-[#818181]">From</label>
                                <input type="date" className="input bg-base-200 text-black font-bold placeholder:text-black" />
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className="label text-[#818181] text-start">To</label>
                                <input type="date" className="input bg-base-200 text-black font-bold placeholder:text-black" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full text-black hover:bg-primary/90 mt-4">Start Booking</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Destination;