
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-black border-t border-portfolio-blue/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-portfolio-light-blue">P</span>avan <span className="text-portfolio-blue">K</span>umar
            </h3>
            <p className="text-gray-400 mt-1">Full Stack Developer & Deep Learning Enthusiast</p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a href="https://github.com/Pavankumar098" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-light-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pavan-kumar-057285222/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-light-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:pavankumar.7200384@gmail.com" className="text-white hover:text-portfolio-light-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Peddapalli Laxmi Pavan Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
