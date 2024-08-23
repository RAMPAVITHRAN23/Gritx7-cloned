import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import EventSlider from '../../Components/EventSlider';
import Footer from '../../Components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isSticky, setIsSticky] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleClick = (link) => {
        setActiveLink(link);
        setIsNavOpen(false);
    };

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
            <div id="hero" className={`${styles.wrapper} bg-[#1D1D1F]`}>
                <div className={styles.background}>
                    <div className={styles.spacer} />
                    <div className={`flex justify-between ${styles.logo}`}>
                        <img className={`${styles.nssLogo} grid-cols-1`} src="https://ik.imagekit.io/xetccow0b/NSS-.png?updatedAt=1722875779618" alt="NSS Logo" />
                        <img className={`${styles.clgLogo} grid-cols-1`} src="https://ik.imagekit.io/xetccow0b/logo.png?updatedAt=1722876729082" alt="College Logo" />
                    </div>
                    <div className={styles.logoContainer}>
                        <img className={styles.mainLogo} src="https://ik.imagekit.io/xetccow0b/mainlogo.png" alt="Main Logo" />
                        <img className={styles.titleLogo} src="https://ik.imagekit.io/xetccow0b/gritxtitlelogo.png?updatedAt=1722874017673" alt="Title Logo" />
                    </div>
                    <div className={styles.countdown}>
                        <div className={styles.countdownItem}>
                            <span id="days" className={styles.number}>00</span>
                            <span className={styles.label}>days</span>
                        </div>
                        <div className={styles.countdownItem}>
                            <span id="hours" className={styles.number}>00</span>
                            <span className={styles.label}>hrs</span>
                        </div>
                        <div className={styles.countdownItem}>
                            <span id="minutes" className={styles.number}>00</span>
                            <span className={styles.label}>mins</span>
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
                                    onClick={() => handleClick('Events')}
                                    to="/events"
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
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Contact Us' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Contact Us')}
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
                    <div className={`fixed top-0 left-0 w-full h-screen bg-[#1D1D1F] flex items-center justify-center transform transition-transform duration-300 ${isNavOpen ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
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
                                <a
                                    className={`text-white block py-2 px-4 border-2 ${activeLink === 'Events' ? 'border-white' : 'border-transparent'} rounded-md`}
                                    onClick={() => handleClick('Events')}
                                    href='/events'
                                >
                                    Events
                                </a>
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
                </div>
            </nav >

            {/* About GRITX 7.0 SECTION */}
            <section className={`px-12 py-20 md:pt-32 ${styles.aboutUs}`}>
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
            < EventSlider />

            {/* Footer */}
            < Footer />
        </>
    );
}

export default Home;
