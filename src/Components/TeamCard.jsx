import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TeamCard = ({ name, imageUrl, linkedinUrl }) => {
    return (
        <div className="relative w-64 h-70 mx-auto overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-full w-full overflow-hidden group">
                <img
                    src={imageUrl}
                    alt={name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:blur-sm"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-center text-gray-800">{name}</p>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-500 hover:text-blue-600"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
