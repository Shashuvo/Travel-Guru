import React, { useState } from 'react';
import HomeBanner from '../../components/HomeBanner';
import { useLoaderData } from 'react-router';
import { images } from '../../assets/images';

const Home = () => {
    const places = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(places[0]);
    console.log(places);
    console.log(selectedPlace);

    return (
        <div className="flex items-center justify-center w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${images[selectedPlace.id]})` }}>
            <div className='w-full md:w-10/12'>
                {/*banner */}
                <HomeBanner place={selectedPlace} places={places} setSelectedPlace={setSelectedPlace}></HomeBanner>
            </div>
        </div>
    );
};

export default Home;