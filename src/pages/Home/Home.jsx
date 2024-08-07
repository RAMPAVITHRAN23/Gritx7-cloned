import React, { useState } from 'react';
import styles from './Home.module.css';
function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            {/* Wrapper to center the background */}
            <div className={`${styles.wrapper} bg-[#1D1D1F] `}>
                <div className={styles.background}>
                    <div className={styles.spacer} />
                    <div className={`flex justify-between ${styles.logo}`}>
                        <img className={`${styles.nssLogo} grid-cols-1`} src="https://ik.imagekit.io/xetccow0b/NSS-.png?updatedAt=1722875779618" alt="" />
                        <img className={`${styles.clgLogo} grid-cols-1`} src="https://ik.imagekit.io/xetccow0b/logo.png?updatedAt=1722876729082" alt="" />
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
            <nav className="flex items-center justify-between mx-auto p-5 bg-[#1D1D1F] ">
                <div className="flex-shrink-0">
                    <h1 className="text-white">Gritx 7.0</h1>
                </div>
                <div className="flex-grow flex justify-center">
                    <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
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
                <div className="flex items-center gap-6 md:hidden">
                    <ion-icon onClick={() => toggleNav()} name="menu" className="text-3xl cursor-pointer"></ion-icon>
                </div>
            </nav>


        </>
    );
}

export default Home;
