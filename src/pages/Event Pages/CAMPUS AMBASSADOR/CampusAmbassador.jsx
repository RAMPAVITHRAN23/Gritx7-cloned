import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import AGALYA from "./CordinatorPhotos/AGALYA M.jpg"
import KIBAR from "./CordinatorPhotos/KIBAR S.jpg"
import NATARAJ from "./CordinatorPhotos/NATARAJ P.jpg"
import CAMPUSAMBASSADORLOGO from "../../../assets/Logos/CAMPUSAMBASSADOR.png";
function CampusAmbassador() {

    const handleRegisterClick = () => {
        window.location.href = 'https://forms.gle/rNVPaYmmty9yBz1E9';
    };

    const teamMembers = [
        {
            name: 'Agalya M',
            imageUrl: AGALYA, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/agalya-moorthi-2a9058228'
        },
        {
            name: 'Kibar S',
            imageUrl: KIBAR, // Replace with actual image URLs
            linkedinUrl: "https://www.linkedin.com/in/kibar-s-2a59ba228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: 'Nataraj P',
            imageUrl: NATARAJ, // Replace with actual image URLs
            linkedinUrl: "https://www.linkedin.com/in/nataraj-p-456563239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
    ];

    return (
        <>
            <div className="relative flex flex-col min-h-screen bg-gray-900 pb-4">
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

                {/* Back Button */}
                <Link to="/events">
                    <button className="absolute top-16 left-5 bg-gray-300 hover:bg-gray-400 text-black font-bold flex items-center justify-center w-12 h-12 rounded-full z-20 md:flex">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                </Link>


                {/* Content Container */}
                <div className="relative z-20 w-[95%] p-5 lg:w-[89%] mt-10 bg-blue-100 lg:p-8 rounded-lg shadow-md lg:max-h-[87vh] lg:overflow-y-auto mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Left side: Image container */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={CAMPUSAMBASSADORLOGO}
                                alt="CAMPUS AMBASSADORLOGO Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>CAMPUS AMBASSADOR </h1>
                                <div className="flex justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                                    <button onClick={handleRegisterClick}
                                        className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                                        REGISTER
                                    </button>
                                    {/* <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                                        BROCHURE
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="bg-blue-400  text-white p-4 rounded-lg grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-1 md:gap-6">
                            {/* First row items (Mobile) */}
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹500</span>
                                <span className="text-sm">WINNER</span>
                            </div>

                            <div className="flex items-center justify-center space-x-2 col-span-1">
                                <span className="text-2xl">📅</span>
                                <span>Sept 24</span>
                            </div>

                            {/* Third item centered in the second row on mobile */}
                            <div className="flex items-center space-x-2 col-span-2 md:col-span-1 justify-center">
                                <span className="text-2xl">👥</span>
                                <span>1</span>
                            </div>
                        </div>
                    </div>


                    {/* Event description */}
                    <div className="mt-6 text-justify">
                        <p>
                            Take charge as a GritX 7.0 Campus Ambassador and take the lead in energizing our event at your
                            campus! This role involves leading promotion efforts, increasing registrations, and raising event
                            visibility. This position is designed to enhance your leadership skills, expand your network, and
                            earn recognition as you drive registrations and elevate awareness .Experience personal growth by
                            supporting the National Service Scheme’s mission by joining our team. Apply now to help drive
                            the success of GritX 7.0 and represent NSS values with pride!

                        </p>
                    </div>

                    {/* Rounds section
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">1. Loge Lore</p>
                                <p className='my-2'>Sep 20, 2023</p>
                                <p>Set your imagination free and craft the destiny of our brand. ✨ Create a unique symbol that embodies our identity and stands out from the crowd. Are you up for the challenge? 🏆🎨</p>
                            </div>
                            <div>
                                <p className="font-semibold">2. UX Odyssey</p>
                                <p className='my-2'>Sep 20, 2023</p>
                                <p>Craft seamless digital experiences that leave a lasting impression! Elevate user experiences and redefine digital landscapes. Your creative prowess is the key to unlock this design excellence. Ready to lead the way?</p>
                            </div>
                            <div>
                                <p className="font-semibold">3. The Design Gurus</p>
                                <p className='my-2'>Sep 20, 2023</p>
                                <p>Transform pixels into purpose! Step into the spotlight and share the story behind your design, and let your passion shine as you unveil the future of user experiences. Get ready to make your mark in the world of design!</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Coordinators section */}
                    {/* Team Cards section */}
                    <div className="mt-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">
                            Co-Ordinators
                        </h1>
                        <div className="flex flex-wrap justify-center gap-6">
                            {teamMembers.map((member, index) => (
                                <TeamCard
                                    key={index}
                                    name={member.name}
                                    phoneNumber={member.phoneNumber}
                                    imageUrl={member.imageUrl}
                                    linkedinUrl={member.linkedinUrl}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
export default CampusAmbassador
