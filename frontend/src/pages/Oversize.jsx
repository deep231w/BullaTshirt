import React from 'react';
import {Card} from '../components/Card';
import regularfit from '../A-tshirt/regularfit.jpg';
import oversize from '../A-tshirt/oversize.jpg';

export const Oversize = () => {
  const products = [
    {
      id: 1,
      image: oversize,
      title: 'oversize T-shirt',
      price: 25.99,
    },
    {
      id: 2,
      image: regularfit,
      title: 'Regular Fit V-Neck T-Shirt',
      price: 29.99,
    },
    // Add more products as needed
  ];

  const handleQuickView = (id) => {
    // Implement quick view functionality
    console.log('Quick view for product id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Oversize T-Shirts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onQuickView={() => handleQuickView(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

