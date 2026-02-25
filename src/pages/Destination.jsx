import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { images } from '../assets/images';

const Destination = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, id);
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-repeat-y bg-contain md:bg-cover md:bg-no-repeat bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[id]})` }}>
            <div className='w-11/12 md:w-10/12 mt-40 md:mt-0'>
                {/* left */}
                
            </div>
        </div>
    );
};

export default Destination;