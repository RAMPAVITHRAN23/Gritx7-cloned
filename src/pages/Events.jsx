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
import SPRINTX from "../assets/Logos/SPRINTX.png"

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
                            route="/pitchperfect"
                        />
                        <EventCard
                            name="UI/UX FORGE"
                            logo={UIUXFORGE}
                            description="Unleash your design genius at UI/UX Forge! 🎨💻 Create stunning interfaces and experiences inspired by innovative themes. 🚀✨ "
                            route="/uiux"
                        />
                        <EventCard
                            name="TECH XPLORE"
                            logo={TECHXPLORE}
                            description="Pitch your groundbreaking research with impact! 🌍📚 Showcase your work on the 17 SDGs and stand out in this competitive paper cum project presentation event. 🏆✨"
                            route="/techxplore"
                        />

                    </div>
                    <h2 className={`text-3xl font-semibold text-white mt-10 mb-6 ${styles.faustina}`}>Non Technical Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto max-w-7xl">
                        <EventCard
                            name="XSCAPE ROOM"
                            logo={XSCAPEROOM}
                            description="Unlock the mystery at Xscape Room🔐! Crack codes, solve riddles, and escape before time runs out󰝋⏰. Can you conquer the ultimate team challenge❓"
                            route="/xscaperoom"
                        />
                        <EventCard
                            name="EPICS & EPISODES"
                            logo={EPICSANDEPISODES}
                            description="“Beyond Books, Beyond Screens” Books 📚, series 🎬, and TV channels 📺 feature epics that unfold across multiple parts.Journey through captivating episodes that drive the plot forward�"
                            route="/epicsandepisodes"
                        />
                        <EventCard
                            name="SPRINTX"
                            logo={SPRINTX}
                            description="Gear up for SprintX! 󰝊🏅 Compete in a thrilling sports challenge where teams of two tackle online and offline rounds.Show your athleticism, strategy, and teamwork to claim victory. "
                            route="/uiux"
                        />
                        <EventCard
                            name="CINIMAX"
                            logo={CINIMAX}
                            description="Dive into CiniMaX and showcase your cinematic prowess! 🎬✨ Experience a captivating journey through film and music, celebrating the art that moves and inspires."
                            route="/cinimax"
                        />
                        <EventCard
                            name="VOICE VAULT"
                            logo={VOICEVAULT}
                            description="🎤Voice Vault: Unleash Your Voice! 📢Showcase your spontaneity and communication skills Craft and deliver a polished radio segment on the spot ✨"
                            route="/voicevault"
                        />

                        <EventCard
                            name="FROZEN FRAMES"
                            logo={FROZENFRAMES}
                            description="“Frames of Hope📸” A Visual Journey Capturing the stark realities of poverty and inequality Contrasts and hopes that shape our world�"
                            route="/frozenframes"
                        />
                        <EventCard
                            name="MONTAJE"
                            logo={MONTAJE}
                            description="“Focus on Change 📹” Documentaries exploring poverty 🌎, education 📚, and ocean conservation 🌊 Visual stories driving positive change for a sustainable future �"
                            route="/montaje"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
