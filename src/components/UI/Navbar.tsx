import React from 'react';
import HomeIcon from '../UI/Home';
import Logo from '../../assets/images/inspiration.png';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Navbar left section */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-8 rounded-full" />
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            Inspiration
          </span>
        </div>

        {/* Navbar right section */}
        <div className="flex items-center space-x-4">
          <HomeIcon />

          <div>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0 dark:text-gray-400 dark:hover:text-gray-200"
              title={
                darkMode ? 'Switch to light theme' : 'Switch to dark theme'
              }
              aria-label={
                darkMode ? 'Switch to light theme' : 'Switch to dark theme'
              }
            >
              <span className="sr-only">
                {darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              </span>
              {darkMode ? (
                <Sun className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Moon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
