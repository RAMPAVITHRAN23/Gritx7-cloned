import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const HomeCard = ({ name, phoneNumber, imageUrl, linkedInUrl }) => {
    return (
        <div className="relative w-48 h-72 mx-auto overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 group">
            <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-3/4 transition-transform duration-300 group-hover:blur-sm"
            />
            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 flex flex-col items-center p-2 h-1/4">
                <p className="text-center text-gray-800 font-semibold mb-1">{name}</p>
                <p className="text-center text-gray-800 font-semibold mb-1">{phoneNumber}</p>
            </div>
            {/* LinkedIn icon, visible by default on small screens and on hover on larger screens */}
            <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg flex items-center justify-center lg:opacity-0 group-hover:lg:opacity-100 transition-opacity duration-300"
            >
                <FaLinkedin className="text-blue-600 text-lg" />
            </a>
        </div>
    );
};

export default HomeCard;
