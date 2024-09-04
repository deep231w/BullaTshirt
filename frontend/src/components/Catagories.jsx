import { Link } from "react-router-dom";
import regularfit from '../A-tshirt/regularfit.jpg';
import oversize from '../A-tshirt/oversize.jpg';

const TCategories = [
    {
        name: 'Regular Fit',
        imageUrl: regularfit,
        link: '/regularfit'
    },
    {
        name: 'Oversize T-shirt',
        imageUrl: oversize,
        link: '/oversize'
    }
];

export const Catagories = () => {
    return (
        <div>
            <div className="pt-10 text-gray-600 font-italic">Categories</div>
            <div className="flex justify-around flex-wrap mt-8">
          {TCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center font-bold text-gray-800">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        
      );
};
