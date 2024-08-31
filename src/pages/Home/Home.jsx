import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import styles from './Home.module.css';
import EventSlider from '../../Components/EventSlider';
import Footer from '../../Components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import videoplayback from "../../assets/backvideo1.mp4";
import audioSrc from "../../assets/Audiofinal.m4a";
import clickAudioSrc from "../../assets/click.wav";
import Gritx from "../../assets/Logos/Gritx.png"
import CampusAmbassador from "../../assets/Logos/CAMPUSAMBASSADOR.png"
import HomeCard from '../../Components/HomeCard';
import clickSound from "../../assets/registerclick.wav"; // Adjust the path to your click sound file
import TeamCard from '../../Components/TeamCard';
import ProgramOfficer from '../../Components/ProgramOfficer';
import SathishKumar from "../../assets/Program Officers/Sathish Kumar.jpg";
import UmaMaheshwaran from "../../assets/Program Officers/Uma Maheshwaran.jpg";
import Vanitha from "../../assets/Program Officers/Vanitha.jpg";
import Dinesh from "../../assets/Program Officers/Dinesh.jpg";
import Mohanraj from "../../assets/Program Officers/Mohan Raj.jpg";
import Srinesh from "../../assets/Student Cordinator/SRINESH A.jpg";
import AzhaguMeenal from "../../assets/Student Cordinator/Azhagu Meenal.jpg"
import MOHAMMEDTHOUFIK from "../../assets/Student Cordinator/MOHAMMED THOUFIK S.jpg"
import YazhiniGaneshkannaa from "../../assets/Student Cordinator/Yazhini Ganeshkannaa.jpg"
import BharathKumar from "../../assets/Student Cordinator/Bharath Kumar.jpg"
import collegelogo from "../../assets/clglogo.png";
import nsslogo from "../../assets/nsslogo.png";
function Home() {
    const teamMembers = [
        {
            name: 'Dr. G. Sathish kumar',
            imageUrl: SathishKumar,
            linkedinUrl: "https://www.linkedin.com/in/sathishkumar-gangatharan-45785767"
        },
        {
            name: 'Dr. S.K. Uma Maheswaran',
            imageUrl: UmaMaheshwaran,
            linkedinUrl: "https://www.linkedin.com/in/umamaheswaransk"
        },
        {
            name: 'Mrs. M. Vanitha',
            imageUrl: Vanitha,
            linkedinUrl: "https://www.linkedin.com/in/vanitha-m-b703341aa",
        },
        {
            name: 'Dr. S. Dinesh',
            imageUrl: Dinesh,
            linkedinUrl: "https://www.linkedin.com/in/dinesh-selvakumaran-5b1863164"
        },
        {
            name: 'Mr. K. Mohan Raj',
            imageUrl: Mohanraj,
            linkedinUrl: "https://www.linkedin.com/in/mohan-raj-a292551aa"
        },
        {
            name: 'SRINESH A',
            imageUrl: Srinesh,
            linkedinUrl: "https://www.linkedin.com/in/srinesh-aravindhan-344019226/"
        },
        {
            name: 'Azhagu Meenal',
            imageUrl: AzhaguMeenal,
            linkedinUrl: "https://www.linkedin.com/in/azhagu-meenal-19897a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: 'Mohammed Thoufik ',
            imageUrl: "",
            linkeidinUrl: 'https://www.linkedin.com/in/mohammed-thoufik-s-0ab995225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Yazhini G',
            imageUrl: YazhiniGaneshkannaa,
            linkedinUrl: "https://www.linkedin.com/in/yazhini-g-372051226"
        },
        {
            name: 'BHARATH KUMAR S',
            imageUrl: BharathKumar,
            linkedinUrl: "https://www.linkedin.com/in/bharath-kumar-a9b827225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
    ];
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isSticky, setIsSticky] = useState(false);
    const heroRef = useRef(null);
    const campusAmbassadorRef = useRef(null);
    const navigate = useNavigate();
    const [hasPlayed, setHasPlayed] = useState(false); // State to track if the audio has played
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const clickAudio = new Howl({
        src: [clickAudioSrc],
        preload: true,
    });
    const sound = new Howl({
        src: [clickSound],
        preload: true
    });

    const audio = new Howl({
        src: [audioSrc],
        preload: true,
        volume: 0.2,
    });

    useEffect(() => {
        const targetDate = new Date('September 24, 2024 09:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const handleMouseEnter = () => {
        if (!hasPlayed) {
            audio.play();
            setHasPlayed(true); // Set hasPlayed to true after the audio plays
        }
    };

    const handleMouseLeave = () => {
        audio.stop();
        setHasPlayed(false); // Reset hasPlayed when the mouse leaves
    };

    const handleNavigate = (path) => {
        window.scrollTo(0, 0); // Scroll to the top of the window
        navigate('/' + path); // Navigate to the desired route
        setIsNavOpen(false); // Close mobile nav if open
    };

    const toggleNav = () => {
        clickAudio.play();
        setTimeout(() => {
            setIsNavOpen(!isNavOpen);
        }, 10); // Small delay to ensure audio starts playing
    };

    const handleClick = (link, path) => {
        clickAudio.play();
        setTimeout(() => {
            proceedWithNavigation(link, path);
        }, 100); // Small delay to ensure audio starts playing
    };

    const proceedWithNavigation = (link, path) => {
        setActiveLink(link);
        setIsNavOpen(false);

        if (path.startsWith('#')) {
            if (path === '#campusAmbassador') {
                const offset = 100; // Adjust this value as needed
                const element = campusAmbassadorRef.current;
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            } else if (path === '#home') {
                const offset = 50; // Adjust this value as needed
                const element = document.getElementById('home');
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });

            } else if (path === '#contactUs') {
                const offset = 0; // Adjust offset as needed
                const element = document.getElementById('contactUs');
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else {
            handleNavigate(path); // Navigate to different routes
        }
    };

    const handleScroll = () => {
        const heroHeight = document.getElementById('hero').offsetHeight;
        const offset = 50; // Offset in pixels

        if (window.scrollY > heroHeight - offset) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>


            {/* Hero Section */}
            <div id="hero" className="relative w-full h-[92vh] lg:h-[100vh] overflow-hidden flex items-center justify-center" ref={heroRef}>
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover md:object-top"
                        style={{ transform: 'scale(1.1)', transformOrigin: 'center top' }}
                    >
                        <source src={videoplayback} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* Logos Container */}
                <div className="absolute left-0 right-0 top-0 flex justify-between items-center px-4 md:bottom-4 md:top-auto lg:top-0 lg:bottom-auto">
                    {/* Logo on the left end */}
                    <img src={collegelogo} alt="Logo 1" className="w-32 h-32 mt-2 lg:mx-0 lg:mt-0" />

                    {/* Logo on the right end */}
                    <img src={nsslogo} alt="Logo 2" className="w-16 h-16 mr-9 mt-2 lg:mx-7 lg:mt-0" />
                </div>

                {/* Centering Container */}
                <div className="relative h-[75vh] flex flex-col justify-center items-center text-white text-center">
                    <h1 className={`text-3xl md:text-6xl lg:text-5xl font-bold mb-4 animate-pulse ${styles.unkemptregular}`}>
                        SRI SAIRAM ENGINEERING COLLEGE
                    </h1>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        NATIONAL SERVICE SCHEME
                    </h2>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        PRESENTS
                    </h2>

                    {/* Glitch Text Container */}
                    <div className={`font-bold text-lg mb-4 lg:text-4xl ${styles.container}`}>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                    </div>

                    {/* Countdown Timer */}
                    <div className={`flex justify-center space-x-4 text-lg md:text-xl lg:text-2xl ${styles.timer}`}>
                        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                            <div key={unit} className="flex flex-col items-center">
                                <span
                                    id={unit}
                                    className="bg-gray-800 bg-opacity-80 rounded-lg px-4 py-2 animate-pulse font-bold text-4xl md:text-5xl lg:text-6xl"
                                >
                                    {formatTime(timeRemaining[unit])}
                                </span>
                                <span className="animate-pulse text-base md:text-lg lg:text-xl">{unit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Navbar section */}
            <nav className={`transition-transform duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 bg-[#1D1D1F]/80 text-white py-3 z-50' : 'absolute bottom-0 left-0 right-0 bg-[#1D1D1F]/80 text-white py-3'}`}>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex-shrink-0 pl-5 text-lg">
                        <h1 className="text-white">Gritx 7.0</h1>
                    </div>
                    <div className="hidden md:flex-grow md:flex md:justify-end pr-5">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4">
                            <li>
                                <button
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Home' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Home', '#home')}
                                >
                                    Home
                                </button>

                            </li>
                            <li>
                                <li>
                                    <button
                                        onClick={() => handleClick('Events', 'events')}
                                        className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    >
                                        Events
                                    </button>
                                </li>
                            </li>
                            <li>
                                <button
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Campus Ambassador' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Campus Ambassador', '#campusAmbassador')}
                                >
                                    Campus Ambassador
                                </button>

                            </li>
                            <li>
                                <button
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Contact Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Contact Us', '#contactUs')}
                                >
                                    Contact Us
                                </button>

                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center gap-6">
                        <button onClick={toggleNav} className="text-3xl mr-4">
                            {isNavOpen ? <FaTimes /> : <FaBars />}
                        </button>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#1D1D1F] flex flex-col items-center justify-center transform transition-transform duration-300 ${isNavOpen ? 'translate-y-0' : 'translate-y-[-100%]'} z-50`}>
                <ul className="flex flex-col items-center gap-8">
                    <li>
                        <button
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Home' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Home', '#home')}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Events', 'events')}
                        >
                            Events
                        </button>
                    </li>
                    <li>
                        <button
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Campus Ambassador' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Campus Ambassador', '#campusAmbassador')}
                        >
                            Campus Ambassador
                        </button>
                    </li>
                    <li>
                        <button
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Contact Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Contact Us', '#contactUs')}
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>

            {/* About GRITX 7.0 SECTION */}
            <section id="home" className={`px-2 py-10 lg:py-7 lg:px-12 lg:pb-20 ${styles.aboutUs}`}>

                <div className='flex flex-col md:flex-row items-center mt-5'>
                    <div className="w-full md:w-[35%] flex justify-center  order-1 md:order-2">
                        <img
                            className={`${styles.aboutLogo} mb-0`}
                            src={Gritx}
                            alt="Gritx Logo"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>

                    <div className='w-full md:w-[80%] px-5 order-2 md:order-1'>

                        <h1 className='text-3xl  font-bold text-white'>About</h1>
                        <h1 className='text-6xl   font-extrabold my-4 text-white'>Gritx 7.0</h1>
                        <p className='text-justify text-white lg:text-lg '>
                            Sairam NSS is honored to unveil GRITX 7.0, a distinguished symposium that sets the benchmark
                            for excellence and service. This premier event provides a unique arena designed to ignite
                            creativity and advance innovation. Join us in this celebration of dedication, where you can
                            showcase your talents and contribute to a significant cause .GRITX 7.0 reflects the core values
                            of the National Service Scheme, offering opportunities to demonstrate your expertise and
                            contribute significantly to our mission. The symposium celebrates dedication, uniting individuals
                            who are passionate about service and achievement. We invite you to partake in this exceptional
                            experience, designed to challenge your strengths and advance your capabilities in an
                            environment that prioritizes diligence and innovation. The rewards extend beyond accolades,
                            providing a chance to contribute to a broader, impactful effort.
                            Mark your calendar and prepare for an event poised to be a pivotal moment in your journey of
                            professional and personal growth. Let us together make GRITX 7.0 celebration one for the books
                            !!!
                        </p>
                    </div>
                </div>
            </section>


            {/* EventSlider Section */}
            < EventSlider />

            {/* Campus Ambassador */}
            <section
                ref={campusAmbassadorRef}
                id="campusAmbassador"
                className={`md:flex flex-col md:flex-row items-center px-2 py-10 lg:px-12 lg:pt-10 lg:pb-20 ${styles.aboutUs}`}
            >
                <div className="flex flex-col md:flex-row ">
                    <h1 className="block md:hidden px-5 text-xl text-left lg:text-3xl font-bold text-white">
                        Campus Ambassador
                    </h1>
                    <div className="w-full md:w-[40%] flex justify-center items-start order-1 md:order-2">
                        <img
                            className="h-56 w-56 md:h-96 md:w-96"
                            src={CampusAmbassador}
                            alt="Campus ambassador Logo"
                        />
                    </div>

                    <div className="w-full md:w-[70%] px-5 order-2 md:order-1">
                        <h1 className="hidden md:block text-3xl font-bold text-white">
                            Campus Ambassador
                        </h1>
                        <p className="text-justify text-white lg:mt-4 lg:pt-2 lg:text-lg">
                            Take charge as a GritX 7.0 Campus Ambassador and take the lead in
                            energizing our event at your campus! This role involves leading
                            promotion efforts, increasing registrations, and raising event
                            visibility. This position is designed to enhance your leadership
                            skills, expand your network, and earn recognition as you drive
                            registrations and elevate awareness. Experience personal growth by
                            supporting the National Service Scheme’s mission by joining our team.
                            Apply now to help drive the success of GritX 7.0 and represent NSS
                            values with pride.
                        </p>
                        <div className="flex flex-col md:flex-row items-center lg:mt-4 mt-4 space-y-4 md:space-y-0 md:space-x-4">

                            <button
                                onClick={() => handleClick("Events", "campusambassador")}
                                className="text-gray-700 text-lg bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300"
                            >
                                Register &#8599;
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section id="contactUs" className={`px-4 lg:px-12 lg:pb-20 ${styles.aboutUs}`}>
                <div className='px-4 lg:px-6'>
                    {/* <h2 className="text-4xl font-bold text-white mb-12">Contact Us</h2> */}

                    {/* Contact Info */}
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <h3 className="text-2xl font-semibold text-white mb-6 text-center">NSS Program Officers</h3>

                        {/* Staff Co-Ordinators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {teamMembers.slice(0, 5).map((member, index) => (
                                <ProgramOfficer
                                    key={index}
                                    name={member.name}
                                    phoneNumber={member.phoneNumber}
                                    imageUrl={member.imageUrl}
                                    linkedinUrl={member.linkedinUrl}
                                />
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Student Co-Ordinators</h3>

                        {/* Student Co-Ordinators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {teamMembers.slice(5, 10).map((member, index) => (
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
            </section>





            {/* Footer */}
            < Footer />
        </>
    );
}

export default Home;
