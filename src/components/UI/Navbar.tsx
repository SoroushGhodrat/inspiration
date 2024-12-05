import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../UI/Home';
import Logo from '../../assets/images/inspiration.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-start ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-4 rounded-full" />
          Inspiration
        </div>

        <HomeIcon navigate={() => navigate('/')} />
      </div>
    </nav>
  );
};

export default Navbar;
