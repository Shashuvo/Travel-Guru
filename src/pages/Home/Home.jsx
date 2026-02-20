import React, { useState } from 'react';
import HomeBanner from '../../components/HomeBanner';
import { useLoaderData } from 'react-router';
import { images } from '../../assets/images';

const Home = () => {
    const places = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(places[0]);
    
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-repeat-y bg-contain md:bg-cover md:bg-no-repeat bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[selectedPlace.id]})` }}>
            <div className='w-11/12 md:w-10/12 mt-40 md:mt-0'>
                {/*banner */}
                <HomeBanner place={selectedPlace} places={places} setSelectedPlace={setSelectedPlace}></HomeBanner>
            </div>
        </div>
    );
};

export default Home;