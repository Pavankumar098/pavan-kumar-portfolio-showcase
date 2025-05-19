
import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-portfolio-black bg-opacity-90 backdrop-blur-sm border-b border-portfolio-blue/20">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-portfolio-light-blue">P</span>avan <span className="text-portfolio-blue">K</span>umar
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-portfolio-light-blue transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-portfolio-light-blue transition-colors">About</Link>
          <Link to="/portfolio" className="text-white hover:text-portfolio-light-blue transition-colors">Portfolio</Link>
          <Link to="/skills" className="text-white hover:text-portfolio-light-blue transition-colors">Skills</Link>
          <Link to="/contact" className="text-white hover:text-portfolio-light-blue transition-colors">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-portfolio-black border-t border-portfolio-blue/20">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-portfolio-light-blue transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-white hover:text-portfolio-light-blue transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/portfolio" className="text-white hover:text-portfolio-light-blue transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/skills" className="text-white hover:text-portfolio-light-blue transition-colors" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/contact" className="text-white hover:text-portfolio-light-blue transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
            
            <div className="flex items-center space-x-4 pt-2">
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
        </div>
      )}
    </header>
  );
};

export default Header;
