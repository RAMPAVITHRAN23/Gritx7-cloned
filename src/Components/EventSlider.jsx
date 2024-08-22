import React, { useState, useRef, useEffect } from 'react';
import './EventSlider.css'; // Make sure to import the CSS file

function EventSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const backButtonRef = useRef(null);

    const items = [
        {
            img: 'https://ik.imagekit.io/xetccow0b/palooza.png?updatedAt=1723049453455',
            topic: 'InnovUX',
            des: 'A design showdown is about to begin!! Get ready for a creative clash! Grab up this opportunity to showcase your persuasive design skills and win amazing prizes!!',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        },
        {
            img: 'https://ik.imagekit.io/xetccow0b/vidcon24logo.png?updatedAt=1723049496442',
            topic: 'ECHOFEST',
            des: 'Our charismatic Performers are gearing up to steal the spotlight and take you on a rollercoaster of music, fun, and pure entertainment...',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        },
        // Add more items as needed
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
            <header className="logo">
                <div className='text-3xl font-bold text-white'>EVENTS</div>
            </header>
            <div className={`carousel ${showDetail ? 'showDetail' : ''}`} ref={carouselRef}>
                <div className={`list ${showDetail ? 'showDetail' : ''}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }} ref={listRef}>
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.img} alt={item.topic} />
                            <div className={`introduce ${showDetail ? 'showDetail' : ''}`}>
                                <div className="topic text-white">{item.topic}</div>
                                <div className="des text-white">{item.des}</div>
                            </div>
                            <div className={`detail ${showDetail ? 'showDetail' : ''}`}>
                                <div className="title">RULES & REGULATIONS</div>
                                <div className="des">{item.detail}</div>
                                <div className="checkout">
                                    <button className="register">Register</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button id="prev" className='text-white' ref={prevButtonRef}>&lt;</button>
                    <button id="next" className='text-white' ref={nextButtonRef}>&gt;</button>
                </div>
            </div>
        </div>
    );
}

export default EventSlider;
