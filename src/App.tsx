import React, { useState, useEffect } from 'react';
import './App.css';
import ColorCombinations from './components/TextAndBackgroundCombination/ColorCombinations';
import MultiStepForm from './components/MultiStepsForm/MultiStepForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/UI/Navbar';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`relative min-h-screen transition-bg  ${darkMode ? 'bg-dark-gradient from-dark-gradient-start to-dark-gradient-end' : 'bg-light-gradient from-light-gradient-start to-light-gradient-end'}`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route path="/color" element={<ColorCombinations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
