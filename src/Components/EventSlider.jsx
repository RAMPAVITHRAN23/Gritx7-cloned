import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventSlider.css';
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

import { Howl } from 'howler';
import clickSound from "../assets/registerclick.wav";
function EventSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const backButtonRef = useRef(null);

    const navigate = useNavigate();
    const sound = new Howl({
        src: [clickSound],
        preload: true
    });


    const handleClick = (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Play the click sound
        sound.play();

        setTimeout(() => {
            window.scrollTo(0, 0);
            navigate('/register');
        }, 200);
    };

    const items = [
        {
            img: XSCAPEROOM,
            topic: 'XSCAPE ROOM',
            des: 'Unlock the mystery at Xscape Room🔐! Crack codes, solve riddles, and escape before time runs out⏰. Can you conquer the ultimate team challenge❓',
            to: '/xscaperoom'
        },
        {
            img: EPICSANDEPISODES,
            topic: ' EPICS & EPISODES',
            des: '“Beyond Books, Beyond Screens” Books 📚, series 🎬, and TV channels 📺 feature epics that unfold across multiple parts.Journey through captivating episodes that drive the plot forward',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            to: '/epicsandepisodes'
        }, {
            img: TECHXPLORE,
            topic: 'TECH-XPLORE',
            des: 'Pitch your groundbreaking research with impact! 🌍📚 Showcase your work on the 17 SDGs and stand out in this competitive paper cum project presentation event. 🏆✨ Secure your chance to publish in IEEE, win cash prizes, and land top internships!',
            to: '/techxplore'
        },
        {
            img: SPRINTX,
            topic: 'SPRINTX',
            des: "Gear up for SprintX! 🏅 Compete in a thrilling sports challenge where teams of two tackle online and offline rounds.Show your athleticism, strategy, and teamwork to claim victory and win exciting prizes! 🏆✨",
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            to: '/sprintx'
        }, {
            img: PITCHXPERFECT,
            topic: 'PITCHXPERFECT',
            des: 'Pitch your vision with precision and flair! 🎨💡 Showcase your digital innovation and make every pixel count in this dynamic business pitch event. 🚀✨ ',
            to: '/pitchperfect'
        },
        {
            img: UIUXFORGE,
            topic: "UI / UX FORGE",
            des: "Unleash your design genius at UI/UX Forge! 🎨💻 Create stunning interfaces and experiences inspired by innovative themes. 🚀✨ Stand out in this live design challenge, and showcase your creativity to win top honors and exclusive opportunities! ",
            to: '/uiux'
        }, {
            img: CINIMAX,
            topic: 'CINIMAX',
            des: "Dive into CiniMaX and showcase your cinematic prowess! 🎬✨ Experience a captivating journey through film and music, celebrating the art that moves and inspires.Join us for a whirlwind of creativity and emotion. 🌟",
            to: '/cinimax'
        },
        {
            img: VOICEVAULT,
            topic: 'VOICE VAULT',
            des: "🎤Voice Vault: Unleash Your Voice! 📢Showcase your spontaneity and communication skills Craft and deliver a polished radio segment on the spot ✨Master the moment and shine as a Radio Jockey!",
            to: '/voicevault'
        }, {
            img: FROZENFRAMES,
            topic: 'FROZEN FRAMES',
            des: "“Frames of Hope📸” A Visual Journey Capturing the stark realities of poverty and inequality Contrasts and hopes that shape our world",
            to: '/frozenframes'
        },
        {
            img: MONTAJE,
            topic: 'MONTAJE',
            des: "“Focus on Change 📹” Documentaries exploring poverty 🌎, education 📚, and ocean conservation 🌊 Visual stories driving positive change for a sustainable future ",
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            to: '/montaje'
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleShowDetail = () => {
        setShowDetail(!showDetail);
    };

    const handleKnowMoreClick = (to) => {
        sound.play();
        navigate(to);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    useEffect(() => {
        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        const carousel = carouselRef.current;
        const listHTML = listRef.current;
        let unAcceppClick;

        const showSlider = (type) => {
            nextButton.style.pointerEvents = 'none';
            prevButton.style.pointerEvents = 'none';

            carousel.classList.remove('next', 'prev');
            let items = listHTML.querySelectorAll('.item');
            if (type === 'next') {
                listHTML.appendChild(items[0]);
                carousel.classList.add('next');
            } else {
                listHTML.prepend(items[items.length - 1]);
                carousel.classList.add('prev');
            }
            clearTimeout(unAcceppClick);
            unAcceppClick = setTimeout(() => {
                nextButton.style.pointerEvents = 'auto';
                prevButton.style.pointerEvents = 'auto';
            }, 2000);
        };

        if (nextButton) {
            nextButton.onclick = () => showSlider('next');
        }

        if (prevButton) {
            prevButton.onclick = () => showSlider('prev');
        }

        const seeMoreButtons = document.querySelectorAll('.seeMore');
        seeMoreButtons.forEach((button) => {
            button.onclick = handleShowDetail;
        });

        if (backButtonRef.current) {
            backButtonRef.current.onclick = () => {
                carousel.classList.remove('showDetail');
            };
        }
    }, [showDetail]);

    return (
        <div className='Events'>
            <header className="logo px-5 lg:px-12">
                <div className='lg:px-5 px-2 text-3xl font-bold text-white'>EVENTS</div>
            </header>
            <div className={`carousel ${showDetail ? 'showDetail' : ''}`} ref={carouselRef}>
                <div className={`list ${showDetail ? 'showDetail' : ''}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }} ref={listRef}>
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.img} alt={item.topic} />
                            <div className={`introduce ${showDetail ? 'showDetail' : ''}`}>
                                <div className="topic text-white">{item.topic}</div>
                                <div className="des text-white text-justify">{item.des}</div>
                                <div className='des mt-2'>
                                    <button
                                        className='bg-gray-200 text-gray-700 text-sm sm:text-base md:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-gray-300 transition-colors duration-300'
                                        onClick={() => handleKnowMoreClick(item.to)}
                                    >
                                        Know More &#8599;
                                    </button>

                                </div>

                            </div>
                            <div className={`detail ${showDetail ? 'showDetail' : ''}`}>
                                <div className="title">RULES & REGULATIONS</div>
                                <div className="des">{item.detail}</div>
                                <div className="checkout">
                                    <button className="register" onClick={() => navigate(item.to)}>Register</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button
                        id="prev"
                        className="text-black text-2xl p-4 md:text-3xl md:p-6 lg:text-4xl lg:p-8 bg-white rounded-full flex items-center justify-center lg:hover:bg-gray-700 transition-colors duration-300"
                        ref={prevButtonRef}
                    >
                        &lt;
                    </button>
                    <button
                        id="next"
                        className="text-black text-2xl p-4 md:text-3xl md:p-6 lg:text-4xl lg:p-8 bg-white rounded-full flex items-center justify-center lg:hover:bg-gray-700 transition-colors duration-300"
                        ref={nextButtonRef}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventSlider;
