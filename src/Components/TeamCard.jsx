import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TeamCard = ({ name, phoneNumber, imageUrl, linkedinUrl }) => {
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
                <div className="flex items-center justify-center w-full">
                    <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                    <div className="lg:hidden opacity-100 transition-opacity duration-300">
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
