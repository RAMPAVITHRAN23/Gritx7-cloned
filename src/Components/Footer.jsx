import React from 'react';
import { FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-6'>
            <div className='container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4'>

                {/* Map Div */}
                <div className='w-full md:w-1/3 order-1 md:order-3 mb-4 md:mb-0'>
                    <h1 className='text-lg font-semibold mb-2'>Locate Us</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124421.81696604118!2d79.91733141640623!3d12.9602171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1661789393148!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>

                {/* Logo Div */}
                <div className='mb-4 md:mb-0 flex justify-center md:justify-start order-2 md:order-1'>
                    <img
                        src="https://ik.imagekit.io/xetccow0b/phenoix2-removebg-preview.png?updatedAt=1723310421800"
                        alt="Logo"
                        className='w-32 h-auto'
                    />
                </div>

                {/* Connect with Us Div */}
                <div className='text-center md:text-left mb-4 md:mb-0 w-full md:w-[40%] order-3 md:order-2'>
                    <h1 className='text-lg font-semibold mb-2'>Connect with us</h1>
                    <p className='mb-2'>Get the latest updates about events and much more ..</p>
                    <div className='flex justify-center md:justify-start space-x-4'>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-xl'>
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-xl'>
                            <FaLinkedin />
                        </a>
                        <a href="mailto:example@gmail.com" className='text-xl'>
                            <FaGoogle />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
