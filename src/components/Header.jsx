import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md mb-6">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link className="text-xl font-bold" to="/">
            MyPortfolio
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link className="hover:text-blue-200 transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-200 transition-colors"
                  to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-200 transition-colors"
                  to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  className="block py-1 hover:text-blue-200 transition-colors"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1 hover:text-blue-200 transition-colors"
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1 hover:text-blue-200 transition-colors"
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
