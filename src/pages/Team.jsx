import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import videoplayback from "../assets/videoplayback.mp4"
import TeamCard from '../Components/TeamCard';

function Events() {

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={videoplayback} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Blurred Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm z-10"></div>

            {/* Content */}
            <div className="relative z-20 min-h-screen flex flex-col">
                <div className="p-6">
                    <button className="absolute top-6 left-6 bg-gray-300 hover:bg-gray-400 text-black font-bold flex items-center justify-center w-12 h-12 rounded-full z-20">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                </div>
                <TeamCard name="Dheena" imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" linkedinUrl="https://www.revampacademy.com/about" />
            </div>
        </div>
    );
}

export default Events;
