import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ name, logo, description }) {
    return (
        <div className="bg-blue-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center max-w-xs h-full transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={logo} alt={`${name} Logo`} className="w-24 h-24 mb-4" />
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <p className="text-black mb-4 flex-grow">{description}</p>
            <div className="flex gap-2">
                <Link to="/register" className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                    Know More
                </Link>
            </div>
        </div>
    );
}

export default EventCard;
