import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="bg-gray-700 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto absolute lg:static top-0 left-0 w-full lg:w-auto bg-gray-700 lg:bg-transparent lg:shadow-none shadow-lg transition-transform duration-300 ease-in-out z-40`}
          style={{ height: isOpen ? '100vh' : 'auto' }}
        >
          <div className="flex flex-col items-center justify-center h-full lg:h-auto lg:flex-row lg:space-x-4 lg:items-center">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              to="/experience"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block mt-4 lg:mt-0 text-white text-lg lg:text-base hover:text-gray-300 lg:py-2 lg:px-4 px-6 py-3 rounded transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
