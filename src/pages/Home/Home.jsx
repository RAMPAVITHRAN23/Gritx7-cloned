import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import EventSlider from '../../Components/EventSlider';
import Footer from '../../Components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import videoplayback from "../../assets/videoplayback.mp4";

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isSticky, setIsSticky] = useState(false);
    const heroRef = useRef(null);

    const campusAmbassadorRef = useRef(null);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        window.scrollTo(0, 0); // Scroll to the top of the window
        navigate('/' + path); // Navigate to the desired route
        setIsNavOpen(false); // Close mobile nav if open
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleClick = (link, path) => {
        setActiveLink(link);
        setIsNavOpen(false); // Close mobile nav if open
        if (path.startsWith('#')) {
            if (path === '#campusAmbassador') {
                const offset = 100; // Adjust this value as needed
                const element = campusAmbassadorRef.current;
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            } else if (path === '#home') {
                const offset = 0; // Adjust this value as needed
                const element = document.getElementById('home');
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else {
            handleNavigate(path); // Navigate to different routes
        }
    };

    const handleScroll = () => {
        const heroHeight = document.querySelector('#hero').offsetHeight;
        setIsSticky(window.scrollY > heroHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div id="hero" className="relative w-full h-[86vh] overflow-hidden flex items-center justify-center" ref={heroRef}>
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

                {/* Centering Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
                    <h1 className={`text-3xl md:text-6xl lg:text-5xl font-bold mb-4 animate-pulse ${styles.unkemptregular}`}>
                        SRI SAIRAM ENGINEERING COLLEGE
                    </h1>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        NATIONAL SERVICE SCHEME PRESENTS
                    </h2>

                    {/* Glitch Text Container */}
                    <div className={`font-bold text-lg mb-4 lg:text-4xl ${styles.container}`}>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx}`}>GRITX 7.0</h1>
                    </div>

                    {/* Countdown Timer */}
                    <div className={`flex justify-center space-x-4 text-lg md:text-xl lg:text-2xl ${styles.unkemptregular}`}>
                        <div className="flex flex-col items-center">
                            <span id="days" className="animate-pulse font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="animate-pulse text-base md:text-lg lg:text-xl">days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span id="hours" className="animate-pulse font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="animate-pulse text-base md:text-lg lg:text-xl">hrs</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span id="minutes" className="animate-pulse font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="animate-pulse text-base md:text-lg lg:text-xl">mins</span>
                        </div>
                    </div>
                </div>
            </div>



            {/* Navbar section */}
            <nav className={`transition-transform duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 bg-[#1D1D1F] text-white py-4 z-50' : 'absolute top-[86vh] left-0 right-0 bg-[#1D1D1F] text-white py-4'}`}>
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
                                <button
                                    onClick={() => handleClick('Events', 'events')}
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
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
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Our Team' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Our Team', '/')}
                                >
                                    Our Team
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center gap-6">
                        <button onClick={toggleNav} className="text-3xl">
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
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Our Team' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Our Team', '/')}
                        >
                            Our Team
                        </button>
                    </li>
                </ul>
            </div>

            {/* About GRITX 7.0 SECTION */}
            < section id="home" className={`px-2 py-10 pt-20 lg:px-12 lg:pt-28 lg:pb-20 md:pt-32 ${styles.aboutUs}`}>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='w-full md:w-[40%] flex justify-center order-1 md:order-2'>
                        <img className={styles.aboutLogo} src="https://ik.imagekit.io/xetccow0b/phenoix2-removebg-preview.png?updatedAt=1723310421800" alt="Gritx Logo" />
                    </div>
                    <div className='w-full md:w-[70%] px-5 order-2 md:order-1'>
                        <h1 className='text-3xl font-bold text-white'>About</h1>
                        <h1 className='text-6xl font-extrabold my-4 text-white'>Gritx 7.0</h1>
                        <p className='text-justify text-white '>
                            Sairam NSS proudly presents an eagerly awaited occasion, an opportunity to savor the sheer joy of celebrating our commitment to service! Join us as we mark the grand spectacle -GRITX 6.0, offering a diverse array of exclusive events and demanding challenges. Here's your chance to shine by showcasing your unique talents for the surprises and twists that await. We extend a warm invitation to join us in honoring the glory of the noble service we provide through NSS. Our lineup of events will put your wit to the test and measure your grit to succeed. Save the date, put your best foot forward, and show us what you've got! Prepare yourself to seize the well-earned rewards that await. Let's make this celebration an unforgettable experience!
                        </p>
                    </div>
                </div>
            </section >


            {/* EventSlider Section */}
            < EventSlider />

            {/* Campus Ambassador */}
            < section ref={campusAmbassadorRef} id="campusAmbassador" className={`px-2 py-10 lg:px-12 lg:pt-10 lg:pb-20 ${styles.aboutUs}`}>
                <h1 className='px-5 text-3xl font-bold text-white'>Campus Ambassador</h1>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='w-full my-10 md:w-[40%] flex justify-center items-center order-1 md:order-2'>
                        <img className={styles.aboutLogo} src="https://www.gritx.co.in/static/media/campusambassadorlogo.a750b68a66c5b303aee2.png" alt="Gritx Logo" />
                    </div>
                    <div className='w-full md:w-[70%] px-5 order-2 md:order-1'>
                        <p className='text-justify text-white lg:mt-6 lg:pt-2'>
                            Sairam NSS proudly presents an eagerly awaited occasion, an opportunity to savor the sheer joy of celebrating our commitment to service! Join us as we mark the grand spectacle -GRITX 6.0, offering a diverse array of exclusive events and demanding challenges. Here's your chance to shine by showcasing your unique talents for the surprises and twists that await. We extend a warm invitation to join us in honoring the glory of the noble service we provide through NSS. Our lineup of events will put your wit to the test and measure your grit to succeed. Save the date, put your best foot forward, and show us what you've got! Prepare yourself to seize the well-earned rewards that await. Let's make this celebration an unforgettable experience!
                        </p>
                        <div className='lg:mt-4 mt-4'>
                            <Link onClick={() => handleClick('Events', '/events')} className='text-white text-lg'>Brochure &#8599;</Link>
                            <Link onClick={() => handleClick('Events', '/events')} className='text-white text-lg ml-4'>Register &#8599;</Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < Footer />
        </>
    );
}

export default Home;
