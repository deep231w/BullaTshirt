// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';


// import { Navigation, Pagination } from 'swiper/modules';

// export const MySwiper = () => {
//   return (
//     <Swiper 
//     spaceBetween={50}
//     slidesPerView={1}
//     navigation={{clickable:true}}
//     autoplay={{delay:3000}}
//     loop={true}
//     pagination={{clickable:true}}
//     className=''
//     >
//       <SwiperSlide>
//         <img src='../image/andre-styles-S0uN4WePj5A-unsplash.jpg' alt='Slide 1' className="w-full h-full object-cover" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src='../image/brooke-cagle-wKOKidNT14w-unsplash.jpg' alt='Slide 2' className="w-full h-full object-cover"/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src='../image/force-majeure-00tlC0Clfrs-unsplash.jpg' alt='Slide 2' className="w-full h-full object-cover" />
//       </SwiperSlide>
//     </Swiper>
//   )
// }; relative w-full max-w-lg mx-auto


import { useState } from "react";

import andreStyles from '../assets/andre-styles-S0uN4WePj5A-unsplash.jpg';
import brookeCagle from '../assets/brooke-cagle-wKOKidNT14w-unsplash.jpg';
import forceMajeure from '../assets/force-majeure-00tlC0Clfrs-unsplash.jpg';

const images = [
    andreStyles, brookeCagle, forceMajeure
];

export const MySwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return  (
        <div className="relative w-full  mx-auto ">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt="Slider"
                    className="w-full h-auto transition-transform duration-500"
                />
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8592;
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8594;
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? 'bg-gray-800'
                                : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
