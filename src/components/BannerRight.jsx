import React from 'react';

const BannerRight = ({ places, selectedPlace, setSelectedPlace }) => {
    console.log(places, selectedPlace, setSelectedPlace)
    return (
        <div className='flex'>
            {
                places.map((place) => (
                    <div onClick={() => setSelectedPlace(place)}
                        className={`${selectedPlace.id === place.id ? "border-primary" : "border-transparent"}`}>
                        <h1>{place.title}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default BannerRight;