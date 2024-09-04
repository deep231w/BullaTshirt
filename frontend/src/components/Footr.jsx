import React from "react";
import { FaInstagram } from "react-icons/fa";

export const Footr = () => {
    return (
        <div> <hr className="w-full border-t border-gray-300 my-4 md:hidden" />
                    <footer className="bg-gray-100 pt-10 pb-5">
           
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row flex-wrap justify-between">

                    {/* Logo and Contact Details */}
                    <div className="w-full md:w-1/3 mb-6 text-center md:text-left">
                        <div className="text-3xl font-bold text-gray-800">Trendee</div>
                        <div className="mt-4 text-gray-700">
                            <p>Address: Kuhudi, khordha</p>
                            <p>Tangi, 752027</p>
                            <p>Contact us: <a href="mailto:trendee@gmail.com" className="text-blue-500">trendee@gmail.com</a></p>
                        </div>
                    </div>

                    {/* Collection Links */}
                    <div className="w-full md:w-1/3 mb-6 text-center md:text-left">
                        <h4 className="font-semibold text-lg text-gray-800 mb-4">Collection</h4>
                        <ul className="text-gray-700">
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Premium Oversized Cotton T-shirt</a></li>
                            <li><a href="#" className="hover:text-blue-500">Premium Cotton T-shirt</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3 mb-6 text-center md:text-left">
                        <h4 className="font-semibold text-lg text-gray-800 mb-4">Connect with us</h4>
                        <a href="https://www.instagram.com" className="text-gray-700 hover:text-pink-500 flex justify-center md:justify-start items-center">
                            <FaInstagram className="mr-2" size={24} />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </div>

    );
}
