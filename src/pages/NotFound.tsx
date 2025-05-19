
import React from 'react';
import { Link } from 'react-router-dom';
import Cube3D from '../components/Cube3D';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Cube3D className="absolute top-20 right-20 opacity-30" />
      <Cube3D className="absolute bottom-20 left-20 opacity-20" />
      
      <div className="text-center">
        <h1 className="text-9xl font-bold text-portfolio-blue">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-2 rounded-md transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
