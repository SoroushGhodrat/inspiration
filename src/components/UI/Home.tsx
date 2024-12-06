import React from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeIcon: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      title="Home"
      onClick={() => navigate('/')}
      className="right-4 cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-200"
      aria-label="Go to Home"
    >
      <Home size={24} color="currentColor" />
    </div>
  );
};

export default HomeIcon;
