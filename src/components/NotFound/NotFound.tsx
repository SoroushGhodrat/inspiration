import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-[90vh] flex-col items-center justify-center bg-gray-900 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-3xl font-semibold text-blue-400">
          Ooops, we have a problem!
        </h2>
        <p className="text-xl text-gray-300">
          The page you're looking for has floated off into space.
        </p>
      </div>

      <div className="relative mt-8">
        <svg
          className="h-64 w-64 md:h-96 md:w-96"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="#4B5563" />
          <circle cx="100" cy="100" r="70" fill="#1F2937" />
          <path
            d="M100 30 L100 170 M30 100 L170 100"
            stroke="#4B5563"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
        <div className="animate-float absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            className="h-24 w-24 md:h-32 md:w-32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" fill="#F9FAFB" />
            <circle cx="50" cy="50" r="35" fill="#60A5FA" />
            <circle cx="35" cy="40" r="5" fill="#1F2937" />
            <circle cx="65" cy="40" r="5" fill="#1F2937" />
            <path
              d="M40 60 Q50 70 60 60"
              fill="none"
              stroke="#1F2937"
              strokeWidth="3"
            />
            <path
              d="M20 20 L30 10 M80 20 L70 10"
              stroke="#F9FAFB"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <Link
        to="/"
        className="mt-8 transform rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
      >
        Return to Earth
      </Link>
    </div>
  );
};

export default NotFound;
