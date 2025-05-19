
import React from 'react';

interface Cube3DProps {
  className?: string;
}

const Cube3D: React.FC<Cube3DProps> = ({ className }) => {
  return (
    <div className={`relative w-16 h-16 animate-float ${className || ''}`}>
      <div className="absolute inset-0 bg-portfolio-blue rounded-lg transform rotate-45 animate-rotate-slow opacity-50"></div>
      <div className="absolute inset-0 bg-portfolio-light-blue rounded-lg transform -rotate-12 animate-rotate-slow opacity-30" style={{ animationDelay: "-3s" }}></div>
    </div>
  );
};

export default Cube3D;
