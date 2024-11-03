import React from 'react';

export const Card = ({ image, title, price, onQuickView }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">${price}</p>
        <button 
          onClick={onQuickView}
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

