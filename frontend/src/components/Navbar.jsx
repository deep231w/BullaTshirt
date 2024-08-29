import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white">
            <nav className="border-b-2 border-blue-800 p-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-2xl font-bold">
                        <Link to="/home">Trendeee</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link to="/" className="text-gray-800 hover:text-gray-400">Home</Link>
                        <Link to="/services" className="text-gray-500 hover:text-gray-400">Services</Link>
                        <Link to="/contact" className="text-blue-400 hover:text-gray-400">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
