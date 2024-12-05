import React from 'react';
import { Home } from 'lucide-react';

interface HomeIconProps {
  navigate: () => void;
}

const HomeIcon: React.FC<HomeIconProps> = ({ navigate }) => {
  return (
    <div
      onClick={navigate}
      className="absolute top-4 right-4 cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-200"
      aria-label="Go to Home"
    >
      <Home size={24} color="currentColor" />
    </div>
  );
};

export default HomeIcon;
