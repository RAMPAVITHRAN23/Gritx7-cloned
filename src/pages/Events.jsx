import React from 'react';
import EventCard from '../Components/EventCard';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import videoplayback from "../assets/Bvideo.mp4";
import styles from "./Events.module.css"
import XSCAPEROOM from "../assets/Logos/XSCAPE ROOM.png";
import EPICSANDEPISODES from "../assets/Logos/EPICSANDEPISODES.png";
import TECHXPLORE from "../assets/Logos/TECHXPLORE.png"
import PITCHXPERFECT from "../assets/Logos/PITCHXPERFECT.png";
import UIUXFORGE from "../assets/Logos/UIUX.png";
import CINIMAX from "../assets/Logos/CINIMAX.png";
import VOICEVAULT from "../assets/Logos/VOICE VAULT.png"
import FROZENFRAMES from "../assets/Logos/FROZENFRAMES.png"
import MONTAJE from "../assets/Logos/MONTAJE.png"
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
                        <h1 className={`text-5xl font-bold text-white ${styles.faustina}`}>Events</h1>
                    </div>
                </div>

                {/* Event cards */}
                <div className="flex flex-col items-center flex-grow">
                    <h2 className={`text-3xl font-semibold text-white mb-6 ${styles.faustina}`}>Technical Events </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto max-w-7xl">
                        <EventCard
                            name="PITCH-X-PERFECT"
                            logo={PITCHXPERFECT}
                            description="Pitch your vision with precision and flair! 🎨💡 Showcase your digital innovation and make every pixel count in this dynamic business pitch event. 🚀✨ "
                        />
                        <EventCard
                            name="UI/UX FORGE"
                            logo={UIUXFORGE}
                            description="Unleash your design genius at UI/UX Forge! 🎨💻 Create stunning interfaces and experiences inspired by innovative themes. 🚀✨ "
                        />
                        <EventCard
                            name="TECH XPLORE"
                            logo={TECHXPLORE}
                            description="Pitch your groundbreaking research with impact! 🌍📚 Showcase your work on the 17 SDGs and stand out in this competitive paper cum project presentation event. 🏆✨"
                        />

                    </div>
                    <h2 className={`text-3xl font-semibold text-white mt-10 mb-6 ${styles.faustina}`}>Non Technical Events </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto max-w-7xl">
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
