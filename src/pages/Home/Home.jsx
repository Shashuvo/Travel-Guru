import React from 'react';
import coxs from "../../assets/images/Rectangle 1.png"

const Home = () => {
    return (
        <div className="flex items-center justify-center gap-11 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${coxs})` }}>
                {/* left banner */}
                <div>
                    <h1>title</h1>
                </div>
                {/* right banner */}
                <div>
                    <h1>pic</h1>
                </div>
        </div>
    );
};

export default Home;