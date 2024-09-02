import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import JERSHILINTHANYA from "./CordinatorPhotos/JERSHILIN THANYA J.png"
import MONISHRAJ from "./CordinatorPhotos/MONISHRAJ A.png"
import SHARMILA from "./CordinatorPhotos/SHARMILA M.jpg"
import SUNILRICHARD from "./CordinatorPhotos/SUNIL RICHARD S.jpg"
import SPRINTXLOGO from "../../../assets/Logos/SPRINTX.png";


function SprintX() {

    const handleRegisterClick = () => {
        alert("Registration yet to open");
    };

    const teamMembers = [
        {
            name: 'JERSHILIN THANYA J',
            imageUrl: JERSHILINTHANYA, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/jershilin-thanya-ba0465231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'MONISHRAJ A',
            imageUrl: MONISHRAJ, // Replace with actual image URLs
            linkedinUrl: "https://www.linkedin.com/in/monishraj-a-17372a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: 'SHARMILA M',
            imageUrl: SHARMILA, // Replace with actual image URLs
            linkedinUrl: "https://www.linkedin.com/in/sharmila-murthy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: 'SUNIL RICHARD S',
            imageUrl: SUNILRICHARD, // Replace with actual image URLs
            linkedinUrl: "https://www.linkedin.com/in/sunil-richard-s-a18578229/"
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
                                src={SPRINTXLOGO}
                                alt="SPRINTX Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>SPRINTX</h1>
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
                        <div className="bg-blue-400 w-full md:w-1/2 text-white p-4 rounded-lg grid grid-cols-3 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1 md:gap-6">
                            {/* First row items (Mobile) */}
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹750</span>
                                <span className="text-sm">WINNER</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹500</span>
                                <span className="text-sm">RUNNER 1</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹300</span>
                                <span className="text-sm">RUNNER 2</span>
                            </div>


                            {/* Remaining items (Mobile) */}
                            <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-1">
                                <span className="text-2xl">📅</span>
                                <span> Sept 24</span>
                            </div>
                            <div className="flex items-center space-x-2 col-span-1 md:col-span-1">
                                <span className="text-2xl">👥</span>
                                <span>2 Mem</span>
                            </div>
                        </div>
                    </div>

                    {/* Event description */}
                    <div className="mt-6 text-justify">
                        <p className='text-lg'>
                            SprintX is an exciting sports-based competition where teams of two will test their
                            athletic skills and teamwork. The event begins with an online round, setting the stage for the
                            competition, followed by three thrilling offline rounds that will challenge participants in diverse
                            sports disciplines. Each stage is designed to push your limits and showcase your abilities in both
                            virtual and real-world settings. Engage in a dynamic and competitive environment, and strive for
                            excellence as you advance through each round. Join us for an action-packed experience that
                            combines strategic thinking, physical prowess, and team spirit!
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

export default SprintX
