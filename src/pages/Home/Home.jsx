import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import EventSlider from '../../Components/EventSlider';
import Footer from '../../Components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isSticky, setIsSticky] = useState(false);
    const [navigateTo, setNavigateTo] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleClick = (link, path) => {
        setActiveLink(link);
        setIsNavOpen(false);
        if (path) {
            setNavigateTo(path);
        }
    };

    useEffect(() => {
        if (navigateTo) {
            navigate(navigateTo);
            setNavigateTo(null); // Reset navigateTo state
        }
    }, [navigateTo, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleScroll = () => {
        if (window.scrollY > document.querySelector('#hero').offsetHeight) {
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
            <div id="hero" className="relative w-full h-[90vh] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover md:object-top"
                        style={{ transform: 'scale(1.1)', transformOrigin: 'center top' }}
                    >
                        <source src="/src/assets/videoplayback.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className={`text-center text-2xl md:text-6xl lg:text-5xl font-bold mb-4 ${styles.unkemptregular}`}>SRI SAIRAM ENGINEERING COLLEGE</h1>
                    <h2 className={`text-center text-xl md:text-4xl lg:text-4xl mb-4 ${styles.unkemptregular}`}>NATIONAL SERVICE SCHEME PRESENTS</h2>
                    <h1 className={`text-center text-8xl md:text-7xl lg:text-8xl font-bold mb-8 ${styles.unkemptregular}`}>GRITX 7.0</h1>
                    <div className="flex justify-center space-x-4 text-center text-lg md:text-xl lg:text-2xl">
                        <div className="flex flex-col items-center">
                            <span id="days" className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="text-base md:text-lg lg:text-xl">days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span id="hours" className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="text-base md:text-lg lg:text-xl">hrs</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span id="minutes" className="font-bold text-4xl md:text-5xl lg:text-6xl">00</span>
                            <span className="text-base md:text-lg lg:text-xl">mins</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar section */}
            <nav className={`transition-transform duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 bg-[#1D1D1F] text-white py-4 z-50' : 'absolute top-[90vh] left-0 right-0 bg-[#1D1D1F] text-white py-4'}`}>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <h1 className="text-white">Gritx 7.0</h1>
                    </div>
                    <div className="hidden md:flex-grow md:flex md:justify-center">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4">
                            <li>
                                <a
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Home' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <Link
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Events', '/events')}
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <a
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Campus Ambassador' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Campus Ambassador')}
                                >
                                    Campus Ambassador
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Our Team' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Our Team')}
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Connect With Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Connect With Us')}
                                >
                                    Connect With Us
                                </a>
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
                        <a
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Home' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <Link
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Events', '/events')}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <a
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Campus Ambassador' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Campus Ambassador')}
                        >
                            Campus Ambassador
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'About Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('About Us')}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-white block py-2 px-4 border-2 ${activeLink === 'Connect With Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                            onClick={() => handleClick('Connect With Us')}
                        >
                            Connect With Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* About GRITX 7.0 SECTION */}
            <section className={`px-2 py-10 pt-20 lg:px-12 lg:pt-28 lg:pb-20 md:pt-32 ${styles.aboutUs}`}>
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
            </section>

            {/* EventSlider Section */}
            <EventSlider />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;
