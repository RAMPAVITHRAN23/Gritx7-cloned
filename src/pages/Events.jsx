import React from 'react';
import EventCard from '../Components/EventCard';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import videoplayback from "../assets/videoplayback.mp4";

function Events() {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        window.scrollTo(0, 0); // Scroll to the top of the window
        navigate('/'); // Navigate to the home route
    };

    return (
        <div className="relative w-full overflow-hidden bg-gray-900">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                preload="auto"
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
                    <button onClick={handleNavigateHome} className="absolute top-6 left-6 bg-gray-300 hover:bg-gray-400 text-black font-bold flex items-center justify-center w-12 h-12 rounded-full z-20">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold text-white">Events</h1>
                    </div>
                </div>

                {/* Event cards */}
                <div className="p-6 flex flex-col items-center flex-grow">
                    <h2 className="text-xl font-semibold text-white mb-6">Technical</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto">
                        <EventCard
                            name="Echo Fest"
                            logo="https://ik.imagekit.io/xetccow0b/palooza.png?updatedAt=1723049453455"
                            description="Participate in GritX 6.0: Submit your IEEE-aligned paper on Agriculture, Medical, Tech, or Environment for in-person research discussions. Elevate academic discourse at this offline event"
                        />
                        <EventCard
                            name="Paper Palooza"
                            logo="https://ik.imagekit.io/xetccow0b/vidcon24logo.png?updatedAt=1723049496442"
                            description="Participate in GritX 6.0: Submit your IEEE-aligned paper on Agriculture, Medical, Tech, or Environment for in-person research discussions. Elevate academic discourse at this offline event"
                        />
                        <EventCard
                            name="Techno Bash"
                            logo="https://ik.imagekit.io/xetccow0b/vidcon24logo.png?updatedAt=1723049496442"
                            description="Join us for an engaging session on the latest technological trends and innovations. A must-attend event for tech enthusiasts and professionals alike."
                        />                    </div>
                    <h2 className="text-xl font-semibold text-white mt-10 mb-6">Non Technical</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto">
                        <EventCard
                            name="Echo Fest"
                            logo="https://ik.imagekit.io/xetccow0b/palooza.png?updatedAt=1723049453455"
                            description="Participate in GritX 6.0: Submit your IEEE-aligned paper on Agriculture, Medical, Tech, or Environment for in-person research discussions. Elevate academic discourse at this offline event"
                        />
                        <EventCard
                            name="Paper Palooza"
                            logo="https://ik.imagekit.io/xetccow0b/vidcon24logo.png?updatedAt=1723049496442"
                            description="Participate in GritX 6.0: Submit your IEEE-aligned paper on Agriculture, Medical, Tech, or Environment for in-person research discussions. Elevate academic discourse at this offline event"
                        />
                        <EventCard
                            name="Techno Bash"
                            logo="https://ik.imagekit.io/xetccow0b/vidcon24logo.png?updatedAt=1723049496442"
                            description="Join us for an engaging session on the latest technological trends and innovations. A must-attend event for tech enthusiasts and professionals alike."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
