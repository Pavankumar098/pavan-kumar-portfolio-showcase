
import React from 'react';
import Cube3D from '../components/Cube3D';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <Cube3D className="absolute top-20 right-20 opacity-30" />
        <Cube3D className="absolute bottom-20 left-20 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/5 to-transparent mask-radial-gradient"></div>
        
        {/* Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left z-10 mb-8 md:mb-0">
            <p className="text-portfolio-light-blue text-lg mb-2 flex items-center justify-center md:justify-start">
              <span className="inline-block w-6 h-px bg-portfolio-light-blue mr-2"></span>
              Hello
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm <span className="text-portfolio-light-blue">Pavan Kumar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              A full-stack developer based in Telangana.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link 
                to="/portfolio" 
                className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                View Work
              </Link>
              <Link 
                to="/contact" 
                className="border border-portfolio-blue text-white hover:bg-portfolio-blue/20 px-6 py-2 rounded-md transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center z-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-portfolio-blue rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-portfolio-light-blue/30">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
                    alt="Placeholder - Add professional headshot of Pavan Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#skills-preview" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-light-blue animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </section>
      
      {/* Skills Preview */}
      <section id="skills-preview" className="bg-portfolio-dark-blue/20 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-portfolio-blue/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-portfolio-light-blue">F</span>
              </div>
              <h3 className="font-medium mb-1">Frontend</h3>
              <p className="text-sm text-gray-400 text-center">React, HTML, CSS, JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-portfolio-blue/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-portfolio-light-blue">B</span>
              </div>
              <h3 className="font-medium mb-1">Backend</h3>
              <p className="text-sm text-gray-400 text-center">Node.js, Express</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-portfolio-blue/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-portfolio-light-blue">D</span>
              </div>
              <h3 className="font-medium mb-1">Deep Learning</h3>
              <p className="text-sm text-gray-400 text-center">Python, ML Models</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-portfolio-blue/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-portfolio-light-blue">D</span>
              </div>
              <h3 className="font-medium mb-1">Databases</h3>
              <p className="text-sm text-gray-400 text-center">MySQL, Oracle, SQL Server</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/skills" 
              className="text-portfolio-light-blue hover:underline"
            >
              See all my skills →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
